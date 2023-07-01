import React from "react";
import BasicInfo from "./BasicInfo";
import PostDesign from "./PostDesign";
import { Stack } from "@mui/material";
import JobDetails from "./JobDetails";
import FeedbackSection from "./sections/FeedbackSection";
import CompanyDetails from "./CompanyDetails";
import Preview from "./Preview";

const CreatePostForm = () => {
	return (
		<Stack spacing={25}>
			<BasicInfo />
			<PostDesign />
			<JobDetails />
			<CompanyDetails />
			<FeedbackSection />
			<Preview />
		</Stack>
	);
};

export default CreatePostForm;
