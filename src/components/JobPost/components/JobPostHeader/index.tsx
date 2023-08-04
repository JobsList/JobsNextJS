import React from "react";
import { Grid } from "@mui/material";
import JobPostHeaderCompanyLogo from "./JobPostHeaderCompanyLogo";
import JobPostHeaderTitle from "./JobPostHeaderTitle";
import JobPostHeaderTags from "./JobPostHeaderTags";
import JobPostHeaderApply from "./JobPostHeaderApply";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

type JobPostHeaderProps = {
	onClick?: () => void;
	showDetails?: boolean;
	post: JOB_POST_PAYLOAD;
	preview?: boolean;
};

const JobPostHeader: React.FC<JobPostHeaderProps> = ({
	onClick = () => {},
	showDetails = false,
	post,
	preview,
}) => {
	const { post_design, job_details } = post;

	const headerDefaultStyle: any = {
		padding: (theme: any) => theme.spacing(5),
		borderRadius: "10px",
		backgroundColor: "extra.white",
	};

	if (post_design?.highlight_in_yellow?.active) {
		headerDefaultStyle.backgroundColor = post_design.highlight_in_yellow.color;
	}

	if (job_details.post_hightlight.active) {
		headerDefaultStyle.backgroundColor = job_details.post_hightlight.color;
	}

	return (
		<Grid
			component="div"
			onClick={onClick}
			container
			columnGap={7}
			rowGap={4}
			sx={
				!showDetails && !preview
					? {
							...headerDefaultStyle,
							"&:hover": {
								opacity: 0.9,
								cursor: "pointer",
								"& button": {
									display: "block",
								},
							},

							"& button": {
								display: "none",
							},
					  }
					: {
							...headerDefaultStyle,
					  }
			}
		>
			<JobPostHeaderCompanyLogo post={post} />
			<Grid item md={6}>
				<JobPostHeaderTitle post={post} preview={preview} />
			</Grid>
			<Grid
				item
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				md={2.5}
				sm={4}
			>
				<JobPostHeaderTags post={post} preview={preview} />
			</Grid>

			<Grid
				item
				md={2}
				sm={2}
				sx={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<JobPostHeaderApply post={post} preview={preview} />
			</Grid>
		</Grid>
	);
};

export default JobPostHeader;
