import React, { useState, useEffect } from "react";
import CardFemale from "./CardFemale";
import CardMale from "./CardMale";

const Personajes = () => {
  //hook State
  const [characters, setCharacters] = useState([]);

  //variable con el metodo Get
  const getData = async () => {
    try {
      const url = "https://rickandmortyapi.com/api/character";
      const data = await fetch(url);
      const res = await data.json();
      setCharacters(res.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Personajes</h1>
      <div className="row">
        {characters.map((character) =>
          character.gender === "Male" ? (
            <CardMale key={character.id} {...character} />
          ) : (
            <CardFemale key={character.id} {...character} />
          )
        )}
      </div>
    </>
  );
};

export default Personajes;
