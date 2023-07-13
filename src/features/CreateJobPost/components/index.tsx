import React from "react";
import BasicInfo from "./BasicInfo";
import PostDesign from "./PostDesign";
import { Stack } from "@mui/material";
import JobDetails from "./JobDetails";
import CompanyDetails from "./CompanyDetails";
import Preview from "./Preview";
import Feedback from "./Feedback";

const CreatePostForm = () => {
	return (
		<Stack spacing={25}>
			<BasicInfo />
			<PostDesign />
			<JobDetails />
			<CompanyDetails />
			<Feedback />
			<Preview />
		</Stack>
	);
};

export default CreatePostForm;
