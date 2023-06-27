import InputWithLabel from "@/components/InputWithLabel";
import React from "react";

const CompanyName = () => {
	return (
		<InputWithLabel
			label="Company Name *"
			helperText="Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc."
		/>
	);
};

export default CompanyName;
