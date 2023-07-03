import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
	JOB_POST_PAYLOAD,
	create_post_initial_state,
} from "./createJobPost.store";

const jobPostSlice = createSlice({
	name: "jobPostSlice",
	initialState: create_post_initial_state,
	reducers: {
		setJobPostPayload(state, { payload }: PayloadAction<JOB_POST_PAYLOAD>) {
			state.payload = payload;
		},
	},
});

export const { setJobPostPayload } = jobPostSlice.actions;

export default jobPostSlice.reducer;
