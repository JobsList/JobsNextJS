import React from "react";
import Editor from "../Editor";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const HowToApply: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { job_details } = payload;

	return (
		<Editor
			onChange={(state) =>
				dispatch(
					setJobPostPayload({
						...payload,
						job_details: {
							...job_details,
							how_to_apply: state,
						},
					})
				)
			}
			label="How To Apply?"
			height="34vh"
			editorState={job_details.how_to_apply}
		/>
	);
};

export default HowToApply;
