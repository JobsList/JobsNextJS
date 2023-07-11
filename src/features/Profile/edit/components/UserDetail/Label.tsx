import { Typography } from "@mui/material";
import React from "react";

type LabelProps = {
	text: string | React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ text }) => {
	return (
		<Typography sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}>
			{text}
		</Typography>
	);
};

export default Label;
