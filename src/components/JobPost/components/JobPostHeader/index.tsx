import React from "react";
import { Grid } from "@mui/material";
import JobPostHeaderCompanyLogo from "./JobPostHeaderCompanyLogo";
import JobPostHeaderTitle from "./JobPostHeaderTitle";
import JobPostHeaderFilters from "./JobPostHeaderFilters";
import JobPostHeaderApply from "./JobPostHeaderApply";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

type JobPostHeaderProps = {
	onClick?: () => void;
	showDetails?: boolean;
	post: JOB_POST_PAYLOAD;
};

const JobPostHeader: React.FC<JobPostHeaderProps> = ({
	onClick = () => {},
	showDetails = false,
	post,
}) => {
	console.log("POST => ", post);
	return (
		<Grid
			component="div"
			onClick={onClick}
			container
			columnGap={7}
			rowGap={4}
			sx={
				!showDetails
					? {
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
					: {}
			}
		>
			<JobPostHeaderCompanyLogo />
			<Grid item md={6}>
				<JobPostHeaderTitle
					title={post.company_name}
					position={post.position}
				/>
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
				<JobPostHeaderFilters />
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
				<JobPostHeaderApply />
			</Grid>
		</Grid>
	);
};

export default JobPostHeader;
