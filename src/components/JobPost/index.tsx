import { Box } from "@mui/material";
import React, { useState } from "react";
import JobPostHeader from "./components/JobPostHeader";
import JobPostDetails from "./components/JobPostDetails";
import HowToApply from "../HowToApply";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

type JobPostProps = {
	expandable?: boolean;
	expanded?: boolean;
	borderd?: boolean;
	preview?: boolean;
	post: JOB_POST_PAYLOAD;
};

const JobPost: React.FC<JobPostProps> = ({
	expandable = true,
	expanded,
	borderd = true,
	preview,
	post,
}) => {
	const [showDetails, setDetailsState] = useState(() => expanded || false);
	const wrapperStyle: any = {};
	if (borderd) {
		wrapperStyle.border = `1px solid`;
		wrapperStyle.borderColor = "extra.grey";
	}

	return (
		<Box
			sx={{
				...wrapperStyle,
			}}
			mt={10}
			mb={10}
		>
			<JobPostHeader
				onClick={() => {
					if (!expandable) return;

					setDetailsState(!showDetails);
				}}
				showDetails={showDetails}
				preview={preview}
				post={post}
			/>

			{showDetails && (
				<>
					<JobPostDetails post={post} preview={preview} />
					<HowToApply post={post} preview={preview} />
				</>
			)}
		</Box>
	);
};

export default JobPost;
