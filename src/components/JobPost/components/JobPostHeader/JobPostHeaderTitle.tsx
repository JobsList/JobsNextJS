import { Chip, Stack, Typography } from "@mui/material";
import React from "react";
import JobPostHeaderLocations from "./JobPostHeaderLocations";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

type JobPostHeaderTitleProps = {
	preview?: boolean;
	post: JOB_POST_PAYLOAD;
};

const JobPostHeaderTitle: React.FC<JobPostHeaderTitleProps> = ({
	post,
	preview,
}) => {
	return (
		<Stack flexWrap="wrap" direction="column">
			<Stack direction="row" alignItems="center">
				<Typography
					component="h2"
					fontSize={18}
					fontWeight={(theme) => theme.typography.fontWeightBold}
				>
					{post.company_name || "Company"}
				</Typography>
				{/* {!preview ? (
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
				) : (
					<></>
				)} */}
			</Stack>
			<Typography>{post.position || "Position"}</Typography>
			<JobPostHeaderLocations post={post} />
		</Stack>
	);
};

export default JobPostHeaderTitle;
