import React from "react";

const CardMale = (character) => {
  return (
    <>
      <div className="container col mt-5 d-flex justify-content-center ">
        <div className="card " style={{ width: "18rem" }}>
          <img src={character.image} className="card-img-top " alt="" />
          <div className="card-body ">
            <h2 className="mb-2">{character.name}</h2>
            <p className="card-text">
              {`Especie: ${character.species}`}
              <br />
              {`Estado:
              ${character.status}`}
              <br />
              {`Genero: ${character.gender}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMale;
