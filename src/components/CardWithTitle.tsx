import { Box, Typography } from "@mui/material";
import React from "react";

type CardWithTitleProps = {
	children: React.ReactNode;
	title: string;
};

const CardWithTitle: React.FC<CardWithTitleProps> = ({
	children = <></>,
	title = "",
}) => {
	return (
		<Box
			sx={{
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: "extra.grey",
				borderRadius: (theme) => theme.shape.borderRadius / 5,
				padding: (theme) => theme.spacing(14, 8, 5, 8),
				boxShadow: (theme) => theme.shadows[1],
				position: "relative",
			}}
			mb={20}
		>
			<Typography
				sx={{
					position: "absolute",
					top: -13,
					backgroundColor: "extra.white",
					padding: (theme) => theme.spacing(2, 5),
					border: "1px solid",
					borderColor: "extra.grey",
					borderBottomWidth: 0,
					borderTopLeftRadius: (theme) => theme.shape.borderRadius,
					borderTopRightRadius: (theme) => theme.shape.borderRadius,
					fontWeight: (theme) => theme.typography.fontWeightBold,
					textTransform: "uppercase",
				}}
			>
				{title}
			</Typography>
			{children}
		</Box>
	);
};

export default CardWithTitle;
