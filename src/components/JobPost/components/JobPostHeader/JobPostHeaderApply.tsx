import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography, styled } from "@mui/material";
import MUIButton from "@/components/Button";

const Button = styled(MUIButton)(({ theme }) => ({
	marginLeft: theme.spacing(6),
	[theme.breakpoints.down("md")]: {
		display: "none !important",
	},
}));

type JobPostHeaderApplyProps = {
	preview?: boolean;
};

const JobPostHeaderApply: React.FC<JobPostHeaderApplyProps> = ({ preview }) => {
	return (
		<>
			{!preview ? (
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
			) : null}
			<Button
				preview={preview}
				variant={!preview ? "contained" : "outlined"}
				fullWidth
			>
				Apply
			</Button>
		</>
	);
};

export default JobPostHeaderApply;
