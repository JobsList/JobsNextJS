import { Box, Stack } from "@mui/material";
import React from "react";
import JobPost from "@/components/JobPost";
import AdvanceSearch from "@/components/AdvanceSearch";

import HomePageHeader from "./components/HomePageHeader";
import { User } from "@/types/User";

type HomePageProps = {
	user: User;
};

const HomePage: React.FC<HomePageProps> = ({ user }) => {
	return (
		<Box>
			<HomePageHeader user={user} />

			<AdvanceSearch />
			<Box mt={10}>{/* <JobPost post={payload} /> */}</Box>
		</Box>
	);
};

export default HomePage;
