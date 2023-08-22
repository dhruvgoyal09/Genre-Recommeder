import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate, useLocation } from "react-router-dom";
import Movies from "./movies";
import play_button from './play.png';

function MovieList(){
    const location = useLocation();
    const [autoPlay , setAutoPlay] = useState([]);
    const genre = location.state.genre;
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=aec31e1f53c1d00c0cd456158657463c')
        .then(res => res.json())
        .then(data => setAutoPlay(data.results))
    } , []);

    function handleClick(movieTitle,movieOverview,movieDate,movieRating,movieVoteCount,moviePosterPath,movieAdult,movieGenres){
        const movieDetails = {Title : movieTitle , Overview : movieOverview , Date : movieDate , Rating : movieRating , VoteCount : movieVoteCount , Poster : moviePosterPath , Adult : movieAdult , Genres : movieGenres};
        navigate("/trailer" , {state : {data : movieDetails}});
    }

    return (
        <>
          <div className = "poster">
                <Carousel
                    showThumbs = {false}
                    autoPlay = {true}
                    transitionTime = {3}
                    infiniteLoop = {true}
                    showStatus = {false}
                >
                    {
                        autoPlay.map(movie => (
                            <div style = {{textDecoration:"none",color:"white"}} class = 'header_autoplay'>
                                <div className = "posterImage">
                                    <img src = {`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className = "posterImage__overlay">
                                    <div class = "listplaybutton" onClick = {() => handleClick(movie.original_title,movie.overview,movie.release_date,movie.vote_average,movie.vote_count,movie.poster_path,movie.adult,movie.genre_ids)}><img src = {play_button} alt = "Play"/></div>
                                    <div className = "posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className = "posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className = "posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className = "fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className = "posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
                <Movies genre = {genre} />
            </div>
        </>
    )
}

export default MovieList;