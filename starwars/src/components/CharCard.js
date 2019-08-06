import React from "react";
import "./StarWars.css";
import styled from "styled-components";


const CharDiv = styled.div`
    width: 25%;
    border-radius: 15px;
    border-style: double solid;
    border-color: black; 
    background: whitesmoke;
    background:rgba(255,255,255,0.5);
    box-shadow: 5px 10px gray;
    margin: 25px;
    padding-bottom: 10px;
`

const CharName = styled.h2`
    color: #c99912;
`

const CharInfo = styled.h3`
    color: #664d07;
`

const CharCard = (props) => {
    // Note: Props come from Character.js
    return (

        <CharDiv>
            <CharName>- {props.name} -</CharName>
            <CharInfo>Birth Year: </CharInfo>{props.birthyear}
            <CharInfo>Gender: </CharInfo>{props.gender}
            <CharInfo>Species: </CharInfo>{props.species}
            <CharInfo>Homeworld: </CharInfo>{props.homeworld}
        </CharDiv>
    );
}

export default CharCard;