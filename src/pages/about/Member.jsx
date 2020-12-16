import React from "react";

const Member = ({ item }) => {
  return (
    <>
      <img src={item.image} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
      <div>
        <h2>Ce qui l’anime au quotidien:</h2>
        <p>{item.motivation}</p>
      </div>
      <div>
        <h2>Pourquoi l’association Toi Demain ?</h2>
        <p>{item.why}</p>
      </div>
    </>
  );
};

export default Member;
