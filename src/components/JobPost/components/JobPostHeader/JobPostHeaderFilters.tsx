import { Chip, Stack } from "@mui/material";
import React from "react";

const JobPostHeaderFilters = () => {
	return (
		<Stack direction="row" flexWrap="wrap" spacing={5}>
			<Chip
				variant="outlined"
				sx={{ backgroundColor: "extra.white", borderRadius: 1 }}
				clickable
				label="filter 1"
				size="small"
			/>
			<Chip
				variant="outlined"
				sx={{ backgroundColor: "extra.white", borderRadius: 1 }}
				clickable
				label="filter 2"
				size="small"
			/>
			<Chip
				variant="outlined"
				sx={{ backgroundColor: "extra.white", borderRadius: 1 }}
				clickable
				label="filter 3"
				size="small"
			/>

			<Chip
				variant="outlined"
				sx={{ backgroundColor: "extra.white", borderRadius: 1 }}
				clickable
				label="filter 4"
				size="small"
			/>
		</Stack>
	);
};

export default JobPostHeaderFilters;
