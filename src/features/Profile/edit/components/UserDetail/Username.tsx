import React from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";

const Username: React.FC = () => {
	return (
		<EditProfileInput label={<Label text="Username" />}>
			<TextField placeholder="username" size="small" />
		</EditProfileInput>
	);
};

export default Username;
