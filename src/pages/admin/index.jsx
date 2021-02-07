import React from "react";
import DatesAdmin from "./DatesAdmin/index";
import GalleryAdmin from "./GalleryAdmin";
import { Container, Venir, Passe } from "./style.jsx";

const Admin = () => {
	return (
		<Container>
			<Venir>
				<DatesAdmin />
			</Venir>
			<Passe>
				<GalleryAdmin />
			</Passe>
		</Container>
	);
};

export default Admin;
