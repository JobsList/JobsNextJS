import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const CompanyEmail: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { company_detail } = payload;

	return (
		<InputWithLabel
			label="Company email* (stays private, for invoice + edit link)"
			helperText={`Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post.`}
			mt={10}
			mb={10}
			value={company_detail.company_email}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({
						...payload,
						company_detail: {
							...company_detail,
							company_email: e.target.value,
						},
					})
				)
			}
		/>
	);
};

export default CompanyEmail;
