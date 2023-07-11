import React from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";
import Label from "./Label";

const Gender: React.FC = () => {
	return (
		<EditProfileInput label={<Label text="Gender" />}>
			<Select size="small" IconComponent={() => <></>} sx={{ width: "30%" }}>
				<MenuItem value=""></MenuItem>
				<MenuItem value="man">Man</MenuItem>
				<MenuItem value="woman">Woman</MenuItem>
				<MenuItem value="other">Other</MenuItem>
			</Select>
		</EditProfileInput>
	);
};

export default Gender;
