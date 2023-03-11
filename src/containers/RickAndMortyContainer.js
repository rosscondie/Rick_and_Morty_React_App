import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import CharacterList from "../components/CharacterList";
import Button from "../components/Button";
import "./RickAndMortyContainer.css"; 
import "../App.css";



function RickAndMortyContainer() {
    const [characters, setCharacters] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);

    async function fetchCharacters(url = "https://rickandmortyapi.com/api/character") {
        const res = await fetch(url);
        const data = await res.json();
        setCharacters(data.results);
        setNext(data.info.next);
        setPrevious(data.info.previous);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);


    return (
        <div className="character-container">
            <Header />
            <CharacterList characters={characters} />
            <Button 
            text="<<  Previous Character"
            clickHandler={() => {fetchCharacters(previous)}}
            />
            <Button
            text="Next Character  >>"
            clickHandler={() => {fetchCharacters(next)}} />
        </div>
    )
}

export default RickAndMortyContainer;