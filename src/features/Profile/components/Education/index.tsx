import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

const Education: React.FC = () => {
	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(15),
				padding: (theme) => theme.spacing(0, 15),
			}}
		>
			<CardHeader title={<Typography variant="h6">Education</Typography>} />
			<CardContent></CardContent>
		</Card>
	);
};

export default Education;
