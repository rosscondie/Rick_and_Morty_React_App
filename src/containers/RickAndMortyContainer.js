import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import CharacterList from "../components/CharacterList";


function RickAndMortyContainer() {
    const [characters, setCharacters] = useState([])

    async function fetchCharacters(url = "https://rickandmortyapi.com/api/character?page=1") {
        const res = await fetch(url);
        const data = await res.json();
        setCharacters(data.results)
    }

    useEffect(() => {
        fetchCharacters();
    }, []);


    return (
        <>
        <Header />
        <CharacterList characters={characters} />
        </>
    )
}

export default RickAndMortyContainer;