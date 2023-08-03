import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { Divider } from "@mui/material";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const ApplyWith: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { job_details } = payload;

	return (
		<React.Fragment>
			<InputWithLabel
				label="Apply URL *"
				helperText={`Apply URLs with a form an applicant can fill out generally receive a lot more applicants than having people apply by email (below). A good platform to have applicants apply on is Lever (not affiliated). `}
				mt={10}
				mb={10}
				value={job_details.apply_with_url}
				require={job_details.apply_with_email === ""}
				onChange={(e) =>
					dispatch(
						setJobPostPayload({
							...payload,
							job_details: {
								...job_details,
								apply_with_url: e.target.value,
								apply_with_email: "",
							},
						})
					)
				}
			/>

			<Divider>Or</Divider>

			<InputWithLabel
				label="Apply email address *"
				helperText={`This email is public (!), the [ Apply ] button links to it if you do not specify an Apply URL above. `}
				mt={10}
				mb={10}
				value={job_details.apply_with_email}
				require={job_details.apply_with_url === ""}
				onChange={(e) =>
					dispatch(
						setJobPostPayload({
							...payload,
							job_details: {
								...job_details,
								apply_with_email: e.target.value,
								apply_with_url: "",
							},
						})
					)
				}
			/>
		</React.Fragment>
	);
};

export default ApplyWith;
