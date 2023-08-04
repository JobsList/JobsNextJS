import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const InvoiceAddress: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { company_details } = payload;

	return (
		<InputWithLabel
			label="Invoice address*"
			helperText={`Specify your company address here and we'll put it on your invoice for your bookkeeping. Be sure to [ Save changes ] in bottom right after editing your invoice address. Then it'll be instantly updated on the invoice. `}
			mt={10}
			mb={10}
			textProps={{
				multiline: true,
				minRows: 5,
				maxRows: 14,
				size: "medium",
				required: true,
			}}
			value={company_details.invoice_address}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({
						...payload,
						company_details: {
							...company_details,
							invoice_address: e.target.value,
						},
					})
				)
			}
		/>
	);
};

export default InvoiceAddress;
