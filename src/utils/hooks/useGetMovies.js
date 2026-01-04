import { useDispatch, useSelector } from "react-redux/alternate-renderers";
import { API_OPTIONS } from "../constants.js";
import { useEffect } from "react";

const useGetMovies = (URL, reducer, state) => {
	const dispatch = useDispatch();
	const currState = useSelector((store) => store.movies[state]);
	const getMovies = async () => {
		const response = await fetch(URL, API_OPTIONS);
		if (!response.ok) return;
		const json = await response.json();
		dispatch(reducer(json.results));
		//console.log(json);
	};

	useEffect(() => {
		if (!currState) {
			getMovies().catch((err) => console.error(err));
		}
	}, []);
};

export default useGetMovies;
