/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { stateToHTML } from "draft-js-export-html";
import Title from "@/components/Title";
import JobPostMission from "./JobPostMission";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";
import RenderRTEInHtml from "@/components/RenderRTEInHtml";

type JobPostDescriptionProps = {
	post: JOB_POST_PAYLOAD;
	preview?: boolean;
};

const JobPostDescription: React.FC<JobPostDescriptionProps> = ({
	post,
	preview,
}) => {
	return (
		<Box>
			<Typography variant="h5">
				{post.company_name || "Company"} is hiring a
			</Typography>
			<Title mt={4} mb={4}>
				{post.position || "Position"}
			</Title>
			{preview ? (
				<Typography>
					The description of the job position will appear here. Write this in
					the "Job Description" box above.
				</Typography>
			) : (
				<RenderRTEInHtml
					state={post.job_details.job_desc.getCurrentContent()}
				/>
			)}

			{!preview ? (
				<>
					<Divider sx={{ mb: 10, mt: 10 }} />
					<JobPostMission />
				</>
			) : (
				<></>
			)}
		</Box>
	);
};

export default JobPostDescription;
