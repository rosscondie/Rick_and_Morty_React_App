import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import CharacterList from "../components/CharacterList";
import Button from "../components/Button";


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
        <>
            <Header />
            <CharacterList characters={characters} />
            <Button 
            text="<<"
            clickHandler={() => {fetchCharacters(previous)}}
            />
            <Button
            text=">>"
            clickHandler={() => {fetchCharacters(next)}} />
        </>
    )
}

export default RickAndMortyContainer;