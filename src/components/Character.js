import React from "react";

function Character({ character }) {
    return (
        <details>
            <summary>{character.name}</summary>
            <img src={character.image} alt="characters face"/>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.location.name}</p>
        </details>
    )
}

export default Character;