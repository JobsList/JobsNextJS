import React from "react";
import StartSection from "./sections/StartSection";
import PostDesignSection from "./sections/PostDesignSection";
import { Stack } from "@mui/material";
import JobDetails from "./sections/JobDetails";
import CompanySection from "./sections/CompanySection";
import FeedbackSection from "./sections/FeedbackSection";
import PreviewSection from "./sections/PreviewSection";

const CreatePostForm = () => {
	return (
		<Stack spacing={25}>
			<StartSection />
			<PostDesignSection />
			<JobDetails />
			<CompanySection />
			<FeedbackSection />
			<PreviewSection />
		</Stack>
	);
};

export default CreatePostForm;
