import React from "react";
import Editor from "../Editor";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const JobDescription = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	return (
		<Editor
			label="Job Description"
			editorState={payload.job_details.job_desc}
			onChange={(state) => {
				return dispatch(
					setJobPostPayload({
						...payload,
						job_details: {
							...payload.job_details,
							job_desc: state,
						},
					})
				);
			}}
		/>
	);
};

export default JobDescription;
