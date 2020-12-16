import React from "react";
import { Card } from "./member.style";

const Member = ({ item }) => {
  return (
    <Card>
      <img src={item.image} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
      <div>
        <h3>Ce qui l’anime au quotidien:</h3>
        <p>{item.motivation}</p>
      </div>
      <div>
        <h3>Pourquoi l’association Toi Demain ?</h3>
        <p>{item.why}</p>
      </div>
    </Card>
  );
};

export default Member;
