import React from "react";
import Character from "./Character";
import "./CharacterList.css"

function CharacterList({ characters }) {
    const characterNodes = characters.map((character) => {
       return <Character character={character} key={character.id} />
    })
    return (
        <section>
        <h3>Characters</h3>
        <main>
            {characterNodes}
        </main>
        </section>
    )
}

export default CharacterList;