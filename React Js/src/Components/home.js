import { useState } from 'react';
import Heading from './heading';
import Logo from './logo';
import { useNavigate} from 'react-router-dom';
const initialState = {
  "Action" : 0,
  "Adventure" : 0,
  "Animation" : 0,
  "Comedy": 0,
  "Crime" : 0,
  "Documentary" : 0,
  "Drama" : 0,
  "Fantasy" : 0,
  "Horror" : 0,
  "Musical" : 0,
  "Mystery" : 0,
  "Romance" : 0,
  "SciFi" : 0,
  "Thriller" : 0,
  "War" : 0
}
const tags = ["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Fantasy","Horror","Musical","Mystery","Romance","SciFi","Thriller","War"]

function Home() {
  const [buttonValues , setButtonValues] = useState([]);
  const [buttonValuesMap , setButtonValuesMap] = useState(initialState);
  const navigate = useNavigate();

  function handleButtonClick(value){
    const updatedMap = { ...buttonValuesMap };
    updatedMap[value] = (updatedMap[value] === 0) ? 1 : 0;
    setButtonValuesMap(updatedMap);

    for(let i = 0 ; i < buttonValues.length ; i++){
        if(value === buttonValues[i]){
            const updateButtonList = buttonValues.filter((element) => element !== value);
            setButtonValues(updateButtonList);
            return;
        }
    }

    setButtonValues([...buttonValues , value]);
  }

  function isSelected(value){
    if(buttonValuesMap[value] === 1){
      return `${value} ✅`;
    }
    else{
      return value;
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(buttonValuesMap),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const res = await response.json();

    if(buttonValues.length == 0 || buttonValues.length == 15 || res.length == 0){
        navigate("/norecommendedtag");
    }
    else{
        if(buttonValues.length == 1 && buttonValues[0] == 'SciFi'){
            res.shift();
        }
        else{
            res.pop();
        }
        navigate("/recommendedtag" , {state : {data : res[0]}});
    }
  }
  
  return (
    <div className = "home">
      <div className = 'home_body'>
        
        <div className = 'header'>
          <div className = 'logo'>
            <Logo></Logo>
          </div>
          <div className = 'heading'>
            <Heading></Heading>
          </div>
        </div>

        <div className = 'button_list'>
          {
            tags.map(tag => (
              <div className = "buttons">
                <button name = {tag} className = "tag_button" onClick = {() => handleButtonClick(tag)} type="button">{isSelected(tag)}</button>
              </div>
            ))
          }
        </div>

        <div className = 'go'>
          <form onSubmit = {handleFormSubmit}>
              <button className = "submit_button" type = "submit">Go &#x1F50D;</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Home;
