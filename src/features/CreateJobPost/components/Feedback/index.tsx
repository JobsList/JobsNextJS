import React from "react";

import CardWithTitle from "@/components/CardWithTitle";
import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";

import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const Feedback: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	return (
		<CardWithTitle title="Feedback about Remote OK">
			<InputWithLabel
				label="Feedback box"
				helperText={` This isn't part of the job post. If you have any feature requests or general feedback about posting a job Remote OK, leave it here. Please be radically honest, I'm always improving the site and act on your feedback fast. It's most important that you're happy with the site and I want you to keep coming back to post here! This feedback box gets sent straight to my phone wherever I am. -Pieter Levels, Founder of Remote OK `}
				mt={10}
				mb={10}
				textProps={{
					multiline: true,
					minRows: 8,
					maxRows: 20,
				}}
				value={payload.feedback}
				onChange={(e) =>
					dispatch(
						setJobPostPayload({
							...payload,
							feedback: e.target.value,
						})
					)
				}
			/>
		</CardWithTitle>
	);
};

export default Feedback;
