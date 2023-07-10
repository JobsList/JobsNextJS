import React from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select, TextField } from "@mui/material";

const Username: React.FC = () => {
	return (
		<EditProfileInput label="Username">
			<TextField placeholder="username" size="small" />
		</EditProfileInput>
	);
};

export default Username;
