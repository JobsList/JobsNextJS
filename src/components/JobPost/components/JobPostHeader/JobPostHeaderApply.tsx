import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button as MUIButton, Typography, styled } from "@mui/material";

const Button = styled(MUIButton)(({ theme }) => ({
	marginLeft: theme.spacing(6),
	[theme.breakpoints.down("md")]: {
		display: "none !important",
	},
}));

const JobPostHeaderApply = () => {
	return (
		<>
			<Typography
				sx={{
					display: "flex",
					alignItems: "center",
					marginLeft: (theme) => theme.spacing(15),
				}}
			>
				<AccessTimeIcon sx={{ marginRight: (theme) => theme.spacing(2) }} />
				2d
			</Typography>
			<Button variant="contained" fullWidth>
				Apply
			</Button>
		</>
	);
};

export default JobPostHeaderApply;
