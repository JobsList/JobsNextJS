import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const InvoiceInput: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { company_detail } = payload;

	return (
		<InputWithLabel
			label="Invoice email (stays private)"
			helperText={`We send a copy of the invoice and edit link to here too. You can write your finance department or accountant expenses email here so they get a copy of the invoice for your bookkeeping.`}
			mt={10}
			mb={10}
			value={company_detail.invoice_email}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({
						...payload,
						company_detail: {
							...company_detail,
							invoice_email: e.target.value,
						},
					})
				)
			}
		/>
	);
};

export default InvoiceInput;
