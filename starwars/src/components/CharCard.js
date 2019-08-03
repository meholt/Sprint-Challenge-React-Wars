import React from "react";
import "./StarWars.css";

const CharCard = (props) => {
    // Note: Props come from Character.js
    return (

        <div className="charCard">
            <h2 className="name">- {props.name} -</h2>
            <h3>Birth Year: </h3>{props.birthyear}
            <h3>Gender: </h3>{props.gender}
            {/* <h3>Species: {props.species}</h3>
            <h3>Homeworld: {props.homeworld}</h3> */}
        </div>
    );
}

export default CharCard;