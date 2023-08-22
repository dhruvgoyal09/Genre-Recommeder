import { useEffect, useState } from "react";
import axios from 'axios';
import YouTube from 'react-youtube';
import { AiFillGithub , AiOutlineMail , AiFillLinkedin } from 'react-icons/ai';
import { useLocation } from "react-router-dom";

const genres_arr = {
  28 : 'Action',
  12 : 'Adventure',
  16 : 'Animation',
  35 : 'Comedy',
  80 : 'Crime',
  99 : 'Documentary',
  18 : 'Drama',
  14 : 'Fanatasy',
  27 : 'Horror',
  10402 : 'Musical',
  9648 : 'Mystery',
  10749 : 'Romance',
  878 : 'Sci-Fi',
  53 : 'Thriller',
  10752 : 'War',
  10751 : 'Family',
  36 : 'History',
  10770 : 'TV Movie',
  37 : 'Western'
};

const apiKey = process.env.REACT_APP_API_KEY;

function Trailer(){
    const [videoId, setVideoId] = useState('');
    const location = useLocation();
    var str = "";
    location.state.data.Genres.map((movie_gen) => (
      str += genres_arr[movie_gen] + ', '
    ))

    const videoOptions = {
        width : '100%',
        height : '530px',
        playerVars : {
          autoplay : 1
        },
    };

    // console.log(location.state.data);


    useEffect(() => {
        const fetchTrailer = async () => {
            try {
              const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search`,
                {
                  params: {
                    key: apiKey,
                    q: `${location.state.data.Title} movie trailer`,
                    part: 'snippet',
                    maxResults: 1,
                    type: 'video',
                  },
                }
              );

              console.log('API Response:', response.data);

              if (response.data.items.length > 0) {
                setVideoId(response.data.items[0].id.videoId);
              }
            } catch (error) {
              console.error('Error fetching video:', error);
            }
          };

          fetchTrailer();
    },[])

    return (
        <>
          <div class = "trailer-header">
            <h1>Keep Watching 🚀</h1>
          </div>

          <div class = "trailer-sec">
            <div class = "left-sec">
              <div class = "trailer_img">
                <img src = {`https://image.tmdb.org/t/p/original${location.state.data.Poster}`} />
              </div>
              <div class = "trailer_content">
                <div class = "trailer_title">{location.state.data.Title}</div>
                <div class = "trailer_overview">{location.state.data.Overview}</div>
                <div class = "trailer_rem">Genres : {str.substring(0,str.length-2)}
                </div>
                <div class = "trailer_rem">Release Date : {location.state.data.Date} 📅</div>
                <div class = "trailer_rem">Rating : {location.state.data.Rating} ⭐</div>
                <div class = "trailer_rem">Votes : {location.state.data.VoteCount} 🎟️</div>
                <div class = "trailer_rem">18+ : {location.state.data.Adult ? ' ✅' : ' ❌'}</div>
              </div>
            </div>
            <div class = "right-sec">
                <div class = "trailer_video">
                  {videoId && (<YouTube videoId = {videoId} opts = {videoOptions} />)}
                </div>
                <div class = "trailer_footer">
                  Copyright &copy; 2023, by DHRUV GOYAL
                </div>
                <div class = "trailer_links">
                  <a href = "https://github.com/dhruvgoyal09" style = {{color : 'white'}}><AiFillGithub/></a> <a href = "https://www.linkedin.com/in/dhruv-goyal-b270aa223/" style = {{color : 'white'}}><AiFillLinkedin/></a>  <a href = "mailto:dhruvg.0911@gmail.com" style = {{color : 'white'}}><AiOutlineMail/></a>
                </div>
            </div>
          </div>
        </>
    )
}

export default Trailer;