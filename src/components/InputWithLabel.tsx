import { Box, TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import React from "react";
import InputLabel from "./InputLabel";

type InputWithLabelProps = {
	label: string;
	helperText: string;
	value?: string;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	mt?: number;
	mb?: number;
	textProps?: TextFieldProps;
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
	label = "",
	helperText = "",
	value,
	onChange = (e) => {},
	mt,
	mb,
	textProps,
}) => {
	return (
		<Box component="div" mt={mt} mb={mb}>
			<InputLabel>{label}</InputLabel>
			<TextField
				{...textProps}
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
