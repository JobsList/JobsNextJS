import { TextField } from "@mui/material";
import React from "react";

type ColorPickerProps = {
	onChange?: (color: string) => void;
	color?: string;
	size?: "small" | "medium";
};

const ColorPicker: React.FC<ColorPickerProps> = ({
	onChange = (color) => {},
	color = "#ffffff",
	size = "small",
}) => {
	return (
		<TextField
			value={color}
			type="color"
			size={size}
			sx={{
				width: (theme) => theme.spacing(50),
			}}
			onChange={(e) => {
				onChange(e.target.value);
			}}
		/>
	);
};

export default ColorPicker;
