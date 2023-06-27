/* eslint-disable react/no-unescaped-entities */
import CardWithTitle from "@/components/CardWithTitle";
import InputWithLabel from "@/components/InputWithLabel";
import Subtitle2 from "@/components/Subtitle2";
import React from "react";
import CheckboxWithBoost from "../CheckboxWithBoost";
import { Typography } from "@mui/material";

const CompanySection = () => {
	return (
		<CardWithTitle title="Company">
			<InputWithLabel
				label="Company Twitter"
				helperText="Twitter username without @. Not required, but used to tag your company when we tweet out your job post. "
				mt={10}
				mb={10}
			/>

			<InputWithLabel
				label="Company email* (stays private, for invoice + edit link)"
				helperText={`Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post.`}
				mt={10}
				mb={10}
			/>

			<InputWithLabel
				label="Invoice email (stays private)"
				helperText={`We send a copy of the invoice and edit link to here too. You can write your finance department or accountant expenses email here so they get a copy of the invoice for your bookkeeping.`}
				mt={10}
				mb={10}
			/>

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
				}}
			/>

			<InputWithLabel
				label="Invoice notes / PO number"
				helperText={`Not required. Add notes here that you'd like to see on the invoice/receipt such as a Purchase Order number or any other internal notes you need for reference. You can add or edit this later. `}
				mt={10}
				mb={10}
			/>

			<Subtitle2>Pay Later</Subtitle2>
			<CheckboxWithBoost
				labelText={<Typography>I'd like to pay later</Typography>}
			/>
		</CardWithTitle>
	);
};

export default CompanySection;
