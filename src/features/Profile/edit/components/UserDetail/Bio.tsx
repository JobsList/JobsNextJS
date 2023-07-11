import React from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";

const Bio: React.FC = () => {
	return (
		<EditProfileInput label={<Label text="Bio" />}>
			<TextField
				multiline
				minRows={6}
				placeholder="Write a bio about yourself."
				sx={{ width: "50%" }}
			/>
		</EditProfileInput>
	);
};

export default Bio;
