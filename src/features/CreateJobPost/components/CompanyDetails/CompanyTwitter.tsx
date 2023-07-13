import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const CompanyTwitter: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { company_detail } = payload;

	return (
		<InputWithLabel
			label="Company Twitter"
			helperText="Twitter username without @. Not required, but used to tag your company when we tweet out your job post. "
			mt={10}
			mb={10}
			value={company_detail.twitter_name}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({
						...payload,
						company_detail: {
							...company_detail,
							twitter_name: e.target.value,
						},
					})
				)
			}
		/>
	);
};

export default CompanyTwitter;
