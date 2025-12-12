import { useDispatch } from "react-redux/alternate-renderers";
import { API_OPTIONS, API_URLS } from "../constants.js";
import { addNowPlayingMovies } from "../../redux/moviesSlice.js";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();
	const getNowPlayingMovies = async () => {
		const response = await fetch(API_URLS.Playing, API_OPTIONS);
		if (!response.ok) return;
		const json = await response.json();
		dispatch(addNowPlayingMovies(json.results));
		//console.log(json);
	};

	useEffect(() => {
		getNowPlayingMovies().catch((err) => console.error(err));
	}, []);
};

export default useNowPlayingMovies;
