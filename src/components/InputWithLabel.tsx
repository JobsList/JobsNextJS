import { Box, TextField } from "@mui/material";
import React from "react";
import InputLabel from "./InputLabel";

type InputWithLabelProps = {
	label: string;
	helperText: string;
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
	label = "",
	helperText = "",
	value,
	onChange = (e) => {},
}) => {
	return (
		<Box component="div">
			<InputLabel>{label}</InputLabel>
			<TextField
				value={value}
				size="small"
				placeholder={label}
				helperText={helperText}
				onChange={onChange}
				required
				fullWidth
			/>
		</Box>
	);
};

export default InputWithLabel;
