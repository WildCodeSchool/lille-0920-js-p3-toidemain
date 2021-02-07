import React, { useEffect } from "react";
import GalleryEditAdmin from "./GalleryEditAdmin";
import GalleryItemAdmin from "./GalerryItemAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getGalleries } from "../../../redux/actions/GalleryActions";
import Spiner from "../../../layout/spiner/Spiner";
import { Container, List, Plist } from "./style.jsx";

const GalleryAdmin = () => {
	const dispatch = useDispatch();
	const galleriesList = useSelector((state) => state.galleriesList);
	const { galleries, loading } = galleriesList;

	useEffect(() => {
		dispatch(getGalleries());
	}, [dispatch]);

	if (loading) {
		<Spiner />;
	}

	return (
		<Container>
			<h1>événements Passeé</h1>
			<div>
				<List>
					<Plist>
						{!loading && galleries.length === 0 ? (
							<p>No événements...</p>
						) : (
							galleries.map((gallery) => (
								<GalleryItemAdmin {...gallery} key={gallery.id} />
							))
						)}
					</Plist>
				</List>
				<GalleryEditAdmin />
			</div>
		</Container>
	);
};

export default GalleryAdmin;
