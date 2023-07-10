import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import theme from "@/theme";

type EditProfileInputProps = {
	label: React.ReactNode;
	subText?: React.ReactNode;
	children: React.ReactNode;
};

const EditProfileInput: React.FC<EditProfileInputProps> = (props) => {
	return (
		<Stack direction="row" alignItems="center" flexWrap="wrap">
			<Stack
				sx={{
					width: "50%",
					[theme.breakpoints.down("md")]: {
						width: "100%",
					},
				}}
			>
				{props.label}
				{props.subText}
			</Stack>
			{props.children}
		</Stack>
	);
};

export default EditProfileInput;
