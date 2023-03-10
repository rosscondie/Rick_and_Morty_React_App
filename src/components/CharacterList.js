import React from "react";
import Character from "./Character";

function CharacterList({ characters }) {
    const characterNodes = characters.map((character) => {
       return <Character character={character} key={character.id} />
    })
    return (
        <>
        <h3>Character List</h3>
        <ul>
            {characterNodes}
        </ul>
        </>
    )
}

export default CharacterList;