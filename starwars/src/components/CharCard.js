import React from "react";
import './App.css';


const CharCard = styled.div`

width: 50%;
background-color: white;
border-radius: 15px;
color: black;
padding: 10px;
margin: 20px auto;

`;

const Character = (props) => {
    // Note: Props come from Character.js
    return (

        <CharCard>
            <h2>{props.name}</h2>
            <br><h3>{props.birth_year}</h3></br>
            <br><h3>{props.species}</h3></br>
            <br><h3>{props.gender}</h3></br>
            <br><h3>{props.homeworld}</h3></br>
        </CharCard>
    );
}

export default CharCard;