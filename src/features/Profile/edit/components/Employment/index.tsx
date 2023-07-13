/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import EmploymentInputs from "./EmploymentInputs";

const Employment: React.FC = () => {
	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(20),
				padding: (theme) => theme.spacing(0, 20),
			}}
		>
			<CardHeader
				title={<Typography variant="h6">Employment</Typography>}
			></CardHeader>
			<CardContent>
				<Typography>
					Please only write years, not months! Leave year end empty if you still
					work there (it'll show as Now). To remove something, make the
					textboxes empty (for now).
				</Typography>

				<EmploymentInputs />
			</CardContent>
		</Card>
	);
};

export default Employment;
