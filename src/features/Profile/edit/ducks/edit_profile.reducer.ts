import { createSlice } from "@reduxjs/toolkit";
import { editProfileState } from "./edit_profile.state";
import { createEditProfile } from "./edit_profile.actions";

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
		builder.addCase(createEditProfile.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(createEditProfile.fulfilled, (state, { payload }) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(createEditProfile.rejected, (state, { payload }) => {
			state.loading = false;
			console.log("payload ==> ", payload);
			state.error = "";
		});
	},
});

export const { setEditProfile, setEducation, setEmployment, setError } =
	editProfileSlice.actions;

export default editProfileSlice.reducer;
