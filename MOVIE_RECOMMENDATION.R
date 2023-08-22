# BUILDING A RECOMMENDATION ENGINE THAT RECOMMENDS MOVIE TO A USER 
# BASED ON THE ANALYSIS OF PREV. USERS

install.packages("aws.s3")
install.packages("tidyverse")
install.packages("qdapTools")
install.packages("odbc")
install.packages("RODBC")

library(aws.s3)
library(odbc)
library(RODBC)
library(tidyverse)                 # includes ggplot2 , dplyr , tidyr , readr
library(qdapTools)
library(recommenderlab)                
library(data.table)
library(reshape2)
library(ff)



# Retrieve and display data

movies <- read.csv("D:/Datasets/Movies/movie.csv" , stringsAsFactors = FALSE)
View(movies)
str(movies)
head(movies)
summary(movies)




tags <- read.csv("D:/Datasets/Movies/tag.csv" , stringsAsFactors = FALSE)
View(tags)
head(tags)



# Reading larger file of around 650 MB
# first allocating class to 10,000 entries of each column, followed by 50,000 there onwards
rating_data1 <- read.csv.ffdf(file="D:/Datasets/Movies/rating.csv", header=TRUE, VERBOSE=TRUE, first.rows=10000, next.rows=50000, colClasses = NA)
View(rating_data1)
str(rating_data1)
head(rating_data1)
summary(rating_data1)


# RATINGS GIVEN BY EACH USER TO multiple MOVIES he/she has watched WITHOUT the TIME STAMP
ratings_per_user = rating_data1[1:200000,] %>% 
  select(-timestamp)


# GROUPING THE RATINGS BY MOVIE_ID AND CALCULATE THE AVERAGE OF THE RATING SECTION
ratings = rating_data1[1:200000,] %>% 
  group_by(movieId) %>% 
  summarize(avg_rating = mean(rating))


# COLUMN NAMES OF TWO DATASETS, MOVIE AND RATING

colnames(movies)
colnames(ratings)
colnames(tags)



# THROUGH QDAPTOOLS PACKAGE, SPLIT ALL GENRES IN A SEPARATE COLUMN 
# ASSIGNING 1 TO THE BELONGING GENRE AND 0 ELSEWISE
# REMOVING THE COLUMNS GENRES AND OTHER UNUSEFUL STUFF
movies_sep_genre <- movies %>% 
  cbind(mtabulate(str_split(movies$genres, "\\|"))) %>% 
  select(-genres , -`(no genres listed)`)

# dropping the genres : 'Children','IMAX','Film-Noir','Western'
movies_sep_genre = movies_sep_genre[,-6]
movies_sep_genre = movies_sep_genre[,-11]
movies_sep_genre = movies_sep_genre[,-12]
movies_sep_genre = movies_sep_genre[,-18]

# JOIN TABLES MOVIE_SEP_GENRE (MOVIES) AND RATING BY MOVIE_ID
# An inner join returns only the rows that have matching values in both tables being joined. In other words, it will only return the rows where the values of the join key are present in both tables.
rated_movies <- movies_sep_genre %>% 
  inner_join(ratings, by = "movieId")


# DESELECT TITLE FROM MOVIE_SEP_GENRE AND MOVIEID SECTION IS CONVERTED AS ROW NAMES
# ROWNAMES = MOVIEID
# COLNAMES = INDIVIDUAL GENRE
movies_matrix <- movies_sep_genre %>%
  select(-title) %>% 
  column_to_rownames(var = "movieId") %>% 
  as.matrix() %>% 
  as("binaryRatingMatrix")            # we convert it into binRatMatrix for the recommender model, that we use later
# binRatingMatrix is a rating matrix that consists of ratings (number of trues ,i.e., 1s in the matrix)


# LIST OF ALL GENRE THROUGH TIBBLE FUNCTION
genres <- movies_matrix %>% 
  colnames() %>% 
  as_tibble()

# RETREIVE TOP 10 MOVIE TAGS TO FILTER OUT RARELY USED TAGS
# TALLY() IS USED TO COUNT AND SUM UP
top_2_tags <- tags %>% 
  group_by(tag) %>% 
  tally() %>% 
  slice_max(n, n = 2)


all_unique_tags = tags %>% 
  group_by(tag) %>% 
  tally()


# REMOVE USERID,TIMESTAMP FROM TAGS TABLES
# FILTER THE TAG BY THE TOP 10 TAGS CONCLUDED ABOVE
# GROUPING THE TAGS BY MOVIEID AND MUTATE THE TAG COLUMN, INCLUDING ALL TAGS(AMONG TOP 10),UNIQUELY, SEPARATED BY ','
# TO IGNORE THE REPETITION OF MOVIEID, USE UNIQUE() FUNCTION
movies_on_top_2_tags <- tags %>% 
  select(-userId, -timestamp) %>% 
  filter(tag %in% top_2_tags$tag) %>% 
  group_by(movieId) %>% 
  mutate(tag = paste0(unique(tag) , collapse = "|")) %>% 
  unique()


# JOINIG MOVIES, 
# AV. RATING of only those movies whose av. rating is calculated and are also present in movies table(inner join) ,and
# left joining the TOP 10 MOVIE TAGS table
# (A left join returns all the rows from the left table and matching rows from the right table)
# In this case, those movieID for which no TAG AMONG TOP 10 MOVIE TAGS are there, NA is substituted)
movie_summary = movies %>% 
  inner_join(movies_on_top_2_tags , by = "movieId") %>% 
  inner_join(ratings , by = "movieId")



# --------------------------------------------------------------------------
# RECOMMENDER ENGINE



# Go through the difference between IBCF(Item Based Collaborative Filtering) and UBCF(User Based)

# SETTING UP RECOMMENDER ENGINE AND PERFORM IBCF
# movies_matrix is a "RatingMatrix" that we have converted before, for the recommender model
# param = (list(k = 5)) indicates that the engine will do 5 times CROSS VALIDATION


recommend <- Recommender(movies_matrix, method = "IBCF", param = list(k = 5))
genres

# 19 genres are there in total uniquely
# Generate all combinations of 0 and 1 for a data frame having genres as the col names separately
possible_comb_of_genres <- expand.grid(replicate(15, c(0, 1), simplify = FALSE))
colnames(possible_comb_of_genres) = c("Action","Adventure","Animation","Comedy","Crime","Documentary",
                                      "Drama","Fantasy","Horror","Musical","Mystery","Romance",
                                      "Sci-Fi","Thriller","War")
# Adding a column 'Recommended' for a particular recommendation of genre through the selected genres
possible_comb_of_genres$Recommended = rep('NA',32768)


for (i in 1:nrow(possible_comb_of_genres)){
  selected_genres <- colnames(possible_comb_of_genres)[possible_comb_of_genres[i,] == 1]
  
  if(length(selected_genres) > 0){
    genre_select_matrix <- genres %>% 
      mutate(genre = as.numeric(value %in% selected_genres)) %>%      # long format
      pivot_wider(names_from = value , values_from = genre) %>%       # wide format(column names same as movies_matrix)
      as.matrix() %>% 
      as("binaryRatingMatrix")
    
    prediction <- predict(recommend , newdata = genre_select_matrix , n = 1)
    
    possible_comb_of_genres[i,16] <- getList(prediction) %>%
      as.character()
  }
}


nrow(possible_comb_of_genres)
nrow(movie_summary)


# SENDING TO DATABASE(data_r in MySQL)
connection <- dbConnect(odbc::odbc(), .connection_string = "Driver={MySQL ODBC 8.0 Unicode Driver};",
                 Server = "localhost" , Database = "data_r" , UID = "root" , PWD = "root123" , Port = 3306)

dbWriteTable(conn = connection , overwrite = TRUE , append = FALSE , value = data.frame(possible_comb_of_genres) , name = "movie_recommender_2")
dbWriteTable(conn = connection , overwrite = TRUE , append = FALSE , value = data.frame(movie_summary) , name = "movies")


# DISCONNECTING THE CONNECTION
dbDisconnect(conn = connection)






# ---------------- ESTABLISHING A DATABASE CONNECTIVITY TO MYSQL OVER THE DATABASE, 'data_r' -----------------------





# con <- dbConnect(odbc::odbc(), .connection_string = "Driver={MySQL ODBC 8.0 Unicode Driver};",
#                  Server = "localhost" , Database = "data_r" , UID = "root" , PWD = "@dhruvgoyal091" , Port = 3306)



# SENDING 'MOVIES' DATASET AS A SAMPLE TO DATABASE CONNECTIVITY
# dbWriteTable(conn = con , overwrite = TRUE , append = FALSE , value = data.frame(movies) , name = "sample_movie_data")


# TESTING THE SQL QUERIES OVER THE TABLE WE IMPORT INTO OUR DATABASE CONNECTIVITY
# sample_query = paste("select * from sample_movie_data;")
# dbGetQuery(con,sample_query)
# dbGetQuery(con,paste("drop table sample_movie_data;"))





# DON'T FORGET TO DISCONNECT THE DATABASE CONNECTION AT THE END
# dbDisconnect(conn = con)
