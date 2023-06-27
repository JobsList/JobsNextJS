import { Chip, Stack, Typography } from "@mui/material";
import React from "react";
import JobPostHeaderTags from "./JobPostHeaderTags";

const JobPostHeaderTitle = () => {
	return (
		<Stack flexWrap="wrap" direction="column">
			<Stack direction="row" alignItems="center">
				<Typography
					component="h2"
					fontSize={18}
					fontWeight={(theme) => theme.typography.fontWeightBold}
				>
					Post Title
				</Typography>
				<Chip
					size="small"
					variant="outlined"
					label="VERIFIED"
					sx={{
						borderRadius: 0.5,
						borderWidth: 0,
						marginLeft: (theme) => theme.spacing(2),
						backgroundColor: "extra.greenTag",
						color: "extra.white",
						textTransform: "uppercase",
						fontWeight: (theme) => theme.typography.fontWeightBold,
					}}
				/>
			</Stack>
			<Typography>Company Name</Typography>
			<JobPostHeaderTags />
		</Stack>
	);
};

export default JobPostHeaderTitle;
