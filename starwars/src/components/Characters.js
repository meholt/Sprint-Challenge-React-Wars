import React, {useState, useEffect} from "react";
import axios from "axios";
import CharCard from "./CharCard";

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
          .get('https://swapi.co/api/people/')
          .then(starWarsInfo => {
            console.log(starWarsInfo);
    
            const character = starWarsInfo.data.url;
    
            console.log(character);
    
            // Set KeyState
            // setPhoto(picture);
            // console.log(photo);
    
          })
    
          .catch(err => {
            console.log('Oops.');
    
          });
      });
}