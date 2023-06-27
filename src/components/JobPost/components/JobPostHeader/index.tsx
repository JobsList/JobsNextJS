import React from "react";
import { Grid } from "@mui/material";
import JobPostHeaderCompanyLogo from "./JobPostHeaderCompanyLogo";
import JobPostHeaderTitle from "./JobPostHeaderTitle";
import JobPostHeaderFilters from "./JobPostHeaderFilters";
import JobPostHeaderApply from "./JobPostHeaderApply";

const JobPostHeader = ({ onClick = () => {}, showDetails = false }) => {
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
				<JobPostHeaderTitle />
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