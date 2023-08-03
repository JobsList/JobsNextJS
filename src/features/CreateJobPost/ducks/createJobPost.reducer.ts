import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
	JOB_POST_PAYLOAD,
	create_post_initial_state,
} from "./createJobPost.store";
import { createJobPost } from "./createJobPost.actions";

const jobPostSlice = createSlice({
	name: "jobPostSlice",
	initialState: create_post_initial_state,
	reducers: {
		setJobPostPayload(state, { payload }: PayloadAction<JOB_POST_PAYLOAD>) {
			state.payload = payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(createJobPost.pending, (state) => {
			state.loading = true;
			state.error = "";
		});
		builder.addCase(createJobPost.fulfilled, (state) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(createJobPost.rejected, (state, { payload }: any) => {
			state.loading = false;
			state.error = payload || "Unable to process your request";
		});
	},
});

export const { setJobPostPayload } = jobPostSlice.actions;

export default jobPostSlice.reducer;
