/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import EmploymentInputs from "./EmploymentInputs";
import { User } from "@/types/User";
import { Profile } from "../../ducks/edit_profile.state";

type Props = {
	user: User;
	profile: Profile;
};

const Employment: React.FC<Props> = ({ user, profile }) => {
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
