import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import JobPost from "@/components/JobPost";
import AdvanceSearch from "@/components/AdvanceSearch";

import HomePageHeader from "./components/HomePageHeader";
import { User } from "@/types/User";
import { JOB_POST_PAYLOAD } from "../CreateJobPost/ducks/createJobPost.store";

type HomePageProps = {
	user: User;
	jobs: Array<JOB_POST_PAYLOAD>;
};

const HomePage: React.FC<HomePageProps> = ({ user, jobs }) => {
	return (
		<Box>
			<HomePageHeader user={user} />

			<AdvanceSearch />
			<Box mt={10}>
				{jobs && jobs.length ? (
					jobs.map?.((job) => <JobPost key={job.id} post={job} />)
				) : (
					<Typography>No Content.</Typography>
				)}
			</Box>
		</Box>
	);
};

export default HomePage;
