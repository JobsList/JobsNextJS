import InputWithLabel from "@/components/InputWithLabel";
import { Divider } from "@mui/material";
import React from "react";

const ApplyWith: React.FC = () => {
	return (
		<React.Fragment>
			<InputWithLabel
				label="Apply URL *"
				helperText={`Apply URLs with a form an applicant can fill out generally receive a lot more applicants than having people apply by email (below). A good platform to have applicants apply on is Lever (not affiliated). `}
				mt={10}
				mb={10}
			/>

			<Divider>Or</Divider>

			<InputWithLabel
				label="Apply email address *"
				helperText={`This email is public (!), the [ Apply ] button links to it if you do not specify an Apply URL above. `}
				mt={10}
				mb={10}
			/>
		</React.Fragment>
	);
};

export default ApplyWith;
