import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";
import { Chip, Stack } from "@mui/material";
import React from "react";

type JobPostHeaderLocationsProps = {
	post: JOB_POST_PAYLOAD;
};

const JobPostHeaderLocations: React.FC<JobPostHeaderLocationsProps> = ({
	post,
}) => {
	return (
		<Stack direction="row" spacing={5}>
			{post.locations?.map?.((l) => (
				<Chip
					key={l.name || l.location}
					size="small"
					sx={{ backgroundColor: "extra.white" }}
					variant="outlined"
					label={`${l.emoji} ${l.name || l.location}`}
				/>
			))}
		</Stack>
	);
};

export default JobPostHeaderLocations;
