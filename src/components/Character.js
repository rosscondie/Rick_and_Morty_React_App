import React from "react";

function Character({ character }) {
    return (
        <li>
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.location.name}</p>
        </li>
    )
}

export default Character;