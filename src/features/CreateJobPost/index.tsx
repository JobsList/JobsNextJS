import { Box, Container } from "@mui/material";
import React from "react";
import CreatePostForm from "./components";
import JobPost from "@/components/JobPost";
import Appbar from "@/components/Appbar";

const CreateJobPost = () => {
	return (
		<Box sx={{ position: "relative" }}>
			<Appbar />

			<Container
				maxWidth="lg"
				sx={{ marginBottom: (theme) => theme.spacing(60) }}
			>
				<CreatePostForm />
			</Container>

			<Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
				<JobPost expandable={false} />
			</Box>
		</Box>
	);
};

export default CreateJobPost;