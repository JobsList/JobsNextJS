import React from "react";
import { Chip, Stack } from "@mui/material";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

type JobPostHeaderTagsProps = {
	preview?: boolean;
	post: JOB_POST_PAYLOAD;
};

const JobPostHeaderTags: React.FC<JobPostHeaderTagsProps> = ({
	post,
	preview,
}) => {
	return (
		<Stack direction="row" flexWrap="wrap" spacing={5}>
			{post.tags?.slice?.(0, 4)?.map?.((t) => (
				<Chip
					key={t}
					variant="outlined"
					sx={{ backgroundColor: "extra.white", borderRadius: 1 }}
					clickable={!preview}
					label={t}
					size="small"
				/>
			))}
		</Stack>
	);
};

export default JobPostHeaderTags;
