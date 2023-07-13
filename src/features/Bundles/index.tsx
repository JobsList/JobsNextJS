import React from "react";
import { Box, Container, Typography } from "@mui/material";

import Appbar from "@/components/Appbar";
import LinkButton from "@/components/LinkButton";
import Title from "@/components/Title";
import JobPost from "@/components/JobPost";
import { useAppSelect } from "@/hooks/useRedux";

const Bundles: React.FC = () => {
	const { payload } = useAppSelect((state) => state.create_job);
	return (
		<Box sx={{ position: "relative" }}>
			<Appbar>
				<Title color="extra.black">Buy a jobs bundle</Title>
				<LinkButton href="/create-job">Post a single job</LinkButton>
			</Appbar>

			<Container
				maxWidth="lg"
				sx={{ marginBottom: (theme) => theme.spacing(60) }}
			>
				<Typography>In-progress</Typography>
			</Container>

			<Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
				<JobPost expandable={false} post={payload} preview />
			</Box>
		</Box>
	);
};

export default Bundles;
