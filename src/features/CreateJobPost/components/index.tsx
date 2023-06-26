import React from "react";
import StartSection from "./sections/StartSection";
import PostDesignSection from "./sections/PostDesignSection";
import { Stack } from "@mui/material";
import JobDetails from "./sections/JobDetails";

const CreatePostForm = () => {
	return (
		<Stack spacing={25}>
			<StartSection />
			<PostDesignSection />
			<JobDetails />
		</Stack>
	);
};

export default CreatePostForm;
