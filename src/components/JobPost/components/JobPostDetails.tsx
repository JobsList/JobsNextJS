import { Box, Grid } from "@mui/material";
import React from "react";
import JobPostDescription from "./JobPostDescription";
import JobPostCompanyDetails from "./JobPostCompanyDetails";

const JobPostDetails = () => {
	return (
		<Box sx={{ width: "80%", margin: (theme) => theme.spacing(15, "auto") }}>
			<Grid container columnGap={10}>
				<Grid item md={8}>
					<JobPostDescription />
				</Grid>
				<Grid item md={3}>
					<JobPostCompanyDetails />
				</Grid>
			</Grid>
		</Box>
	);
};

export default JobPostDetails;
