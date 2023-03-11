import React from "react";
import "./Character.css"

function Character({ character }) {
    return (
        <div className="character">
        <article>
            <h3>{character.name}</h3>
            <article className="character-details">
            <img className="portrait" src={character.image} alt="characters face"/>
            <aside>
            <p><b>Status:</b> {character.status}</p>
            <p><b>Species:</b> {character.species}</p>
            <p><b>Location:</b> {character.location.name}</p>
            </aside>
            </article>
        </article>
        </div>
    )
}

export default Character;