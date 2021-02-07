import React from "react";
import { Card } from "./member.style.jsx";

const Member = ({ item }) => {
	return (
		<Card>
			<img src={item.image} alt={item.name} />
			<div>
				<h3>{item.name}</h3>
				<p>{item.description}</p>
			</div>
			<div>
				<h4>Ce qui l’anime au quotidien:</h4>
				<p>{item.motivation}</p>
			</div>
			<div>
				<h4>Pourquoi l’association Toi Demain ?</h4>
				<p>{item.why}</p>
			</div>
		</Card>
	);
};

export default Member;
