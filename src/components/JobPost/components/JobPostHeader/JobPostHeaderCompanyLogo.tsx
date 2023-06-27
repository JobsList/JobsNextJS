import { Avatar, Grid } from "@mui/material";
import React from "react";

const JobPostHeaderCompanyLogo = () => {
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
			<Avatar sx={{ width: 56, height: 56 }}>C</Avatar>
		</Grid>
	);
};

export default JobPostHeaderCompanyLogo;
