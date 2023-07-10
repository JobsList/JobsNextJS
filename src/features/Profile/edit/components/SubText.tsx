import theme from "@/theme";
import { Typography } from "@mui/material";
import React from "react";

type SubTextProps = {
	text: string;
};

const SubText: React.FC<SubTextProps> = ({ text }) => {
	return (
		<Typography
			sx={{
				width: "75%",
				[theme.breakpoints.down("md")]: {
					width: "100%",
				},
			}}
		>
			{text}
		</Typography>
	);
};

export default SubText;
