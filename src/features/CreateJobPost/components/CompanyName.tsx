import React from "react";
import InputWithLabel from "../../../components/InputWithLabel";

const CompanyName = () => {
	return (
		<InputWithLabel
			label="Company Name *"
			helperText="Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc."
		/>
	);
};

export default CompanyName;
