/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import SideProject from "./SideProject";

const SideProjects: React.FC = () => {
	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(20),
				padding: (theme) => theme.spacing(0, 20),
			}}
		>
			<CardHeader title={<Typography variant="h6">Side Projects</Typography>} />
			<CardContent>
				<Typography>
					Please only write years, not months! You can add your (side) projects
					and portfolio items here. Leave year end empty if you still work on it
					(it'll show as Now). To remove something, make the textboxes empty
					(for now).
				</Typography>

				<SideProject />
			</CardContent>
		</Card>
	);
};

export default SideProjects;
