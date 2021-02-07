import React, { useEffect } from "react";
import DateItem from "./DateItem/index";
import { getDates } from "../../redux/actions/DateActions";
import { useDispatch, useSelector } from "react-redux";
import Spiner from "../../layout/spiner/Spiner";
import { Events } from "./style.jsx";

const Dates = () => {
	const dispatch = useDispatch();
	const datesList = useSelector((state) => state.datesList);
	const { dates, loading } = datesList;

	useEffect(() => {
		dispatch(getDates());
	}, [dispatch]);

	if (loading) {
		<Spiner />;
	}

	return (
		<Events>
			<ul>
				<li>
					<h2>Stages et Ateliers à Venir</h2>
					<br />
				</li>
				{!loading && dates.length === 0 ? (
					<p>No événements...</p>
				) : (
					dates.map((dat) => <DateItem {...dat} key={dat.id} />)
				)}
			</ul>
		</Events>
	);
};

export default Dates;
