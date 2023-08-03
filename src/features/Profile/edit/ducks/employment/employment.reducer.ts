import { createSlice } from "@reduxjs/toolkit";
import { createOrUpdateEmployment } from "./employment.actions";
import { employmentState } from "./employment.state";

const editProfileEmploymentSlice = createSlice({
	name: "editProfileEmploymentSlice",
	initialState: employmentState,
	reducers: {
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setEmployment: (state, { payload }) => {
			state.employment = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createOrUpdateEmployment.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(
			createOrUpdateEmployment.fulfilled,
			(state, { payload }) => {
				state.loading = false;
				state.error = "";
			}
		);
		builder.addCase(createOrUpdateEmployment.rejected, (state, { payload }) => {
			state.loading = false;
			state.error = "";
		});
	},
});

export const { setEmployment, setError } = editProfileEmploymentSlice.actions;

export default editProfileEmploymentSlice.reducer;
