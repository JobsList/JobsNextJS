import { Box, Grid } from "@mui/material";
import React from "react";
import JobPostDescription from "./JobPostDescription";
import JobPostCompanyDetails from "./JobPostCompanyDetails";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

type JobPostDetailsProps = {
	post: JOB_POST_PAYLOAD;
	preview?: boolean;
};

const JobPostDetails: React.FC<JobPostDetailsProps> = ({ preview, post }) => {
	return (
		<Box sx={{ width: "80%", margin: (theme) => theme.spacing(15, "auto") }}>
			<Grid container columnGap={10}>
				<Grid item md={8}>
					<JobPostDescription post={post} preview={preview} />
				</Grid>
				{!preview ? (
					<Grid item md={3}>
						<JobPostCompanyDetails />
					</Grid>
				) : (
					<></>
				)}
			</Grid>
		</Box>
	);
};

export default JobPostDetails;
