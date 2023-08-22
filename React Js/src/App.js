import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/home";
import RecommendedTag from "./Components/rectag";
import NoRecommendedTag from "./Components/norectag";
import MovieList from "./Components/movielist";
import Trailer from "./Components/trailer";
import './App.css';

function App(){
  return (
    <div className = "app">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} /> 
          <Route path = "/recommendedtag" element = {<RecommendedTag />} /> 
          <Route path = "/norecommendedtag" element = {<NoRecommendedTag />} />
          <Route path = "/movielist" element = {<MovieList />}></Route> 
          <Route path = "/trailer" element = {<Trailer />}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;