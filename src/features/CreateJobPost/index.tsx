import React from "react";
import { Box, Container } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import CreatePostForm from "./components";
import JobPost from "@/components/JobPost";
import Appbar from "@/components/Appbar";
import { useAppSelect } from "@/hooks/useRedux";
import Title from "@/components/Title";
import LinkButton from "@/components/LinkButton";

const CreateJobPost: React.FC = () => {
	const { payload } = useAppSelect((state) => state.create_job);
	return (
		<Box sx={{ position: "relative" }}>
			<Appbar>
				<Title color="extra.black">Hire remotely</Title>
				<LinkButton href="/bundles">
					Buy a bundle <TrendingFlatIcon sx={{ ml: 10 }} />
				</LinkButton>
			</Appbar>

			<Container
				maxWidth="lg"
				sx={{ marginBottom: (theme) => theme.spacing(60) }}
			>
				<CreatePostForm />
			</Container>

			<Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
				<JobPost expandable={false} post={payload} preview />
			</Box>
		</Box>
	);
};

export default CreateJobPost;
