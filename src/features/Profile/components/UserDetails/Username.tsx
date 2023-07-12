import { Typography } from "@mui/material";
import React from "react";

type UsernameProps = {
	name: string;
};

const Username: React.FC<UsernameProps> = (props) => {
	return (
		<Typography
			textAlign="center"
			variant="h4"
			fontWeight={(theme) => theme.typography.fontWeightBold}
		>
			{props.name}
		</Typography>
	);
};

export default Username;
