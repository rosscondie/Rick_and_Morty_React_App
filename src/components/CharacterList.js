import React from "react";
import Character from "./Character";

function CharacterList({ characters }) {
    const characterNodes = characters.map((character) => {
       return <Character character={character} key={character.id} />
    })
    return (
        <>
        <h3>Characters</h3>
        <main>
            {characterNodes}
        </main>
        </>
    )
}

export default CharacterList;