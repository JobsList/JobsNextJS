import { createSlice } from "@reduxjs/toolkit";
import { sideProjectState } from "./sideProjects.state";
import { createOrUpdateSideProjects } from "./sideProjects.actions";

const editProfileSideProjectsSlice = createSlice({
	name: "editProfileSideProjectsSlice",
	initialState: sideProjectState,
	reducers: {
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setSideProjects: (state, { payload }) => {
			state.sideProjects = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createOrUpdateSideProjects.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(
			createOrUpdateSideProjects.fulfilled,
			(state, { payload }) => {
				state.loading = false;
				state.error = "";
			}
		);
		builder.addCase(
			createOrUpdateSideProjects.rejected,
			(state, { payload }) => {
				state.loading = false;
				state.error = "";
			}
		);
	},
});

export const { setSideProjects, setError } =
	editProfileSideProjectsSlice.actions;

export default editProfileSideProjectsSlice.reducer;
