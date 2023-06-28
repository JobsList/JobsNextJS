import React from "react";
import BasicInfo from "./BasicInfo";
import PostDesign from "./PostDesign";
import { Stack } from "@mui/material";
import JobDetails from "./JobDetails";
import CompanySection from "./sections/CompanySection";
import FeedbackSection from "./sections/FeedbackSection";
import PreviewSection from "./sections/PreviewSection";

const CreatePostForm = () => {
	return (
		<Stack spacing={25}>
			<BasicInfo />
			<PostDesign />
			<JobDetails />
			<CompanySection />
			<FeedbackSection />
			<PreviewSection />
		</Stack>
	);
};

export default CreatePostForm;
