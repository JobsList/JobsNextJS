import { Typography } from "@mui/material";
import React from "react";

type ExperienceProps = {
	text: string;
};

const Experience: React.FC<ExperienceProps> = (props) => {
	return (
		<Typography
			textAlign="center"
			fontWeight={(theme) => theme.typography.fontWeightBold}
		>
			{props.text}
		</Typography>
	);
};

export default Experience;
