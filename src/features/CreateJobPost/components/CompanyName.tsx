import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../ducks/createJobPost.reducer";

const CompanyName = () => {
	const { payload } = useAppSelect((state) => state.create_job);
	const dispatch = useAppDispatch();
	const { company_name } = payload;

	return (
		<InputWithLabel
			label="Company Name *"
			helperText="Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc."
			value={company_name}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({ ...payload, company_name: e.target.value })
				)
			}
		/>
	);
};

export default CompanyName;
