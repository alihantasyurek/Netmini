import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		removeMovies: () => {
			return null;
		},
	},
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo, removeMovies } =
	moviesSlice.actions;
