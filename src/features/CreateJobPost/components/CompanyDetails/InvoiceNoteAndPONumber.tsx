import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const InvoiceNoteAndPONumber: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { company_details } = payload;

	return (
		<InputWithLabel
			label="Invoice notes / PO number"
			helperText={`Not required. Add notes here that you'd like to see on the invoice/receipt such as a Purchase Order number or any other internal notes you need for reference. You can add or edit this later. `}
			mt={10}
			mb={10}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({
						...payload,
						company_details: {
							...company_details,
							invoice_note_po: e.target.value,
						},
					})
				)
			}
			value={company_details.invoice_note_po}
		/>
	);
};

export default InvoiceNoteAndPONumber;
