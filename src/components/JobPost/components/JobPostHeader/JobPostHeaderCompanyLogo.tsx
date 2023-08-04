import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";
import { Avatar, Grid } from "@mui/material";
import React from "react";

type JobPostHeaderCompanyLogoProps = {
	post: JOB_POST_PAYLOAD;
};

const JobPostHeaderCompanyLogo: React.FC<JobPostHeaderCompanyLogoProps> = ({
	post,
}) => {
	return (
		<Grid
			item
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			md={1}
			sm={1}
		>
			<Avatar
				src={
					post?.post_design?.show_company_logo?.active
						? post.job_details.company_logo
						: ""
				}
				sx={{ width: 56, height: 56 }}
			>
				C
			</Avatar>
		</Grid>
	);
};

export default JobPostHeaderCompanyLogo;
