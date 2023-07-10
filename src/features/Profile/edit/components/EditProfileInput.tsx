import React from "react";
import { Stack, TextField, Typography } from "@mui/material";

type EditProfileInputProps = {
	label: string;
	subText?: string;
	children: React.ReactNode;
};

const EditProfileInput: React.FC<EditProfileInputProps> = (props) => {
	return (
		<Stack direction="row" alignItems="center" flexWrap="wrap">
			<Stack sx={{ width: "60%" }}>
				<Typography
					sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
				>
					{props.label}
				</Typography>
				<Typography>{props.subText}</Typography>
			</Stack>
			{props.children}
		</Stack>
	);
};

export default EditProfileInput;
