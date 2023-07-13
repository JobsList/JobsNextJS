import { Stack, Typography } from "@mui/material";
import React from "react";

type RenderSectionProps = {
	title: string | React.ReactNode;
	children: React.ReactNode;
};

const RenderSection: React.FC<RenderSectionProps> = (props) => {
	return (
		<Stack direction="row" flexWrap="wrap">
			<Typography
				sx={{
					display: "flex",
					alignItems: "center",
					width: "40%",
					fontWeight: (theme) => theme.typography.fontWeightBold,
				}}
			>
				{props.title}
			</Typography>
			{props.children}
		</Stack>
	);
};

export default RenderSection;
