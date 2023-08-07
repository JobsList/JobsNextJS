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
	const tags =
		typeof post.tags === "object"
			? post.tags?.map?.((t) => `${t?.tag}`)
			: [...post.tags];
	return (
		<Stack direction="row" flexWrap="wrap" columnGap={2} rowGap={2}>
			{tags?.slice?.(0, 3)?.map?.((t) => (
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
