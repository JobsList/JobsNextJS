import { TextField } from "@mui/material";
import React, { useState } from "react";

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
	const [_color, setColor] = useState<string>(() => color);
	return (
		<TextField
			value={_color}
			type="color"
			size={size}
			sx={{
				width: (theme) => theme.spacing(50),
			}}
			onBlur={(e) => {
				onChange(_color);
			}}
			onChange={(e) => {
				setColor(e.target.value);
			}}
		/>
	);
};

export default ColorPicker;
