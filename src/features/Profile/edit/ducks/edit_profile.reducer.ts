import { createSlice } from "@reduxjs/toolkit";
import { editProfileState } from "./edit_profile.state";
import {
	createOrUpdateEducation,
	createOrUpdateProfile,
} from "./edit_profile.actions";

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
	extraReducers: (builder) => {
		builder.addCase(createOrUpdateProfile.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(createOrUpdateProfile.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(createOrUpdateProfile.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = "";
		});

		/**Education */
		builder.addCase(createOrUpdateEducation.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(createOrUpdateEducation.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(createOrUpdateEducation.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = "";
		});
	},
});

export const { setEditProfile, setEducation, setEmployment, setError } =
	editProfileSlice.actions;

export default editProfileSlice.reducer;
