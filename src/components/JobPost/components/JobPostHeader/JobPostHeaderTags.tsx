import { Chip, Stack } from "@mui/material";
import React from "react";

const JobPostHeaderTags = () => {
	return (
		<Stack direction="row">
			<Chip
				size="small"
				sx={{ backgroundColor: "extra.white" }}
				variant="outlined"
				label="🌍 Worldwide"
			/>
		</Stack>
	);
};

export default JobPostHeaderTags;
