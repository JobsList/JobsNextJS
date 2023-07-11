import React from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import SubText from "./SubText";
import Label from "./Label";

const EmailInput: React.FC = () => {
	return (
		<EditProfileInput
			label={<Label text="Email" />}
			subText={
				<SubText
					text={`We never display this on the site, but you use this for logging in.
				And we forward you messages from employers, as well as send you
				notifications.`}
				/>
			}
		>
			<TextField size="small" type="email" />
		</EditProfileInput>
	);
};

export default EmailInput;
