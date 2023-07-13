import InputWithLabel from "@/components/InputWithLabel";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const InvoiceNoteAndPONumber: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { company_detail } = payload;

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
						company_detail: {
							...company_detail,
							invoice_note_po_number: e.target.value,
						},
					})
				)
			}
			value={company_detail.invoice_note_po_number}
		/>
	);
};

export default InvoiceNoteAndPONumber;
