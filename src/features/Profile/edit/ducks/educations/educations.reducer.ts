import { createSlice } from "@reduxjs/toolkit";
import { educationState } from "./education.state";
import { createOrUpdateEducation } from "./educations.actions";

const editProfileEducationSlice = createSlice({
	name: "editProfileEducationSlice",
	initialState: educationState,
	reducers: {
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setEducation: (state, { payload }) => {
			state.educations = payload;
		},
	},
	extraReducers: (builder) => {
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

export const { setEducation, setError } = editProfileEducationSlice.actions;

export default editProfileEducationSlice.reducer;
