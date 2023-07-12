import React from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";

const PreferredHourly: React.FC = () => {
	return (
		<EditProfileInput label={<Label text="Your preferred hourly pay (min)" />}>
			<TextField
				size="small"
				type="number"
				InputProps={{
					startAdornment: "US$ ",
					endAdornment: "/hour",
				}}
			/>
		</EditProfileInput>
	);
};

export default PreferredHourly;
