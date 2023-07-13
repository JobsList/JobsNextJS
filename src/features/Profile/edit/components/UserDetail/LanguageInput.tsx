import React from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";

const LanguageInput: React.FC = () => {
	return (
		<EditProfileInput
			label={
				<Label text="Spoken languages you're fluent in (comma seperated)" />
			}
		>
			<TextField size="small" placeholder="Languages (comma separated)" />
		</EditProfileInput>
	);
};

export default LanguageInput;
