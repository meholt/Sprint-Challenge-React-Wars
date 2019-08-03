import React, {useState, useEffect} from "react";
import axios from "axios";
import CharCard from "./CharCard";

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
          .get('https://swapi.co/api/people')
          .then(charInfo => {
    
            const char = charInfo.data.results;
    
            console.log(char);
    
            // Set KeyState
            setCharacters(char);
            console.log(characters);
    
          })
    
          .catch(err => {
            console.log('Oops.');
    
          });
      });

      return (

        <div>
            {characters.map(character => {
                return <CharCard 
                name={character.name}
                birthyear={character.birth_year}
                gender={character.gender}
                // species={character.species}
                // homeworld={character.homeworld}
                />
            })}
        </div>
      );
};

export default Characters;