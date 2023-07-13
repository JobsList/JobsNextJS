/* eslint-disable react/no-unescaped-entities */
import React from "react";

import CardWithTitle from "@/components/CardWithTitle";

import CompanyTwitter from "./CompanyTwitter";
import CompanyEmail from "./CompanyEmail";
import InvoiceInput from "./InvoiceInput";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceNoteAndPONumber from "./InvoiceNoteAndPONumber";
import PayLater from "./PayLater";

const CompanyDetails = () => {
	return (
		<CardWithTitle title="Company">
			<CompanyTwitter />
			<CompanyEmail />
			<InvoiceInput />
			<InvoiceAddress />
			<InvoiceNoteAndPONumber />
			<PayLater />
		</CardWithTitle>
	);
};

export default CompanyDetails;
