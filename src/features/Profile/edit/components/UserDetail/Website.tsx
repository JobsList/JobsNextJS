import React from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";

const Website: React.FC = () => {
	return (
		<EditProfileInput label={<Label text="🔗 Website" />}>
			<span>https://</span>
			<TextField size="small" type="url" placeholder="website URL" />
		</EditProfileInput>
	);
};

export default Website;
