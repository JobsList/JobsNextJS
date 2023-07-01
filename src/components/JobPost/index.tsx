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
	post: JOB_POST_PAYLOAD;
};

const JobPost: React.FC<JobPostProps> = ({
	expandable = true,
	expanded,
	borderd = true,
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
				borderRadius: "10px",
				backgroundColor: "extra.white",
				padding: (theme) => theme.spacing(5),
			}}
		>
			<JobPostHeader
				onClick={() => {
					if (!expandable) return;

					setDetailsState(!showDetails);
				}}
				showDetails={showDetails}
				post={post}
			/>

			{showDetails && (
				<>
					<JobPostDetails />
					<HowToApply />
				</>
			)}
		</Box>
	);
};

export default JobPost;
