import React from "react";
import Editor from "../Editor";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

const JobDescription = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { job_desc } = payload.job_details;
	return (
		<Editor
			label="Job Description"
			editorState={job_desc}
			onChange={(state) => {
				return dispatch(
					setJobPostPayload({
						...payload,
						job_details: {
							...payload.job_details,
							job_desc: convertToRaw(state?.getCurrentContent?.()),
						},
					})
				);
			}}
		/>
	);
};

export default JobDescription;
