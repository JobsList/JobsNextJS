import { createSlice } from "@reduxjs/toolkit";
import { editProfileState } from "./edit_profile.state";

const editProfileSlice = createSlice({
	name: "editProfileSlice",
	initialState: editProfileState,
	reducers: {
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setEditProfile: (state, { payload }) => {
			state.profile = payload;
		},
		setEducation: (state, { payload }) => {
			state.educations = payload;
		},
		setEmployment: (state, { payload }) => {
			state.employment = payload;
		},
	},
	extraReducers: (builder) => {},
});

export const { setEditProfile, setEducation, setEmployment, setError } =
	editProfileSlice.actions;

export default editProfileSlice.reducer;
