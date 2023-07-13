import UploadFile from "@/components/UploadFile";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const CompanyLogo: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { job_details } = payload;

	return (
		<UploadFile
			file={job_details.company_logo}
			onChange={(file) =>
				dispatch(
					setJobPostPayload({
						...payload,
						job_details: {
							...job_details,
							company_logo: file,
						},
					})
				)
			}
		/>
	);
};

export default CompanyLogo;
