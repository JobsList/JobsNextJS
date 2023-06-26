import { Box } from "@mui/material";
import React, { useState } from "react";
import JobPostHeader from "./components/JobPostHeader";
import JobPostDetails from "./components/JobPostDetails";
import HowToApply from "../HowToApply";

type JobPostProps = {
	expandable?: boolean;
};

const JobPost: React.FC<JobPostProps> = ({ expandable = true }) => {
	const [showDetails, setDetailsState] = useState(() => false);
	return (
		<Box
			sx={{
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: "extra.grey",
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
