import { Box, Stack } from "@mui/material";
import React from "react";
import JobPost from "@/components/JobPost";
import AdvanceSearch from "@/components/AdvanceSearch";

import HomePageHeader from "./components/HomePageHeader";
import UserAvatar from "@/components/UserAvatar";

const HomePage: React.FC = () => {
	return (
		<Box>
			<HomePageHeader />

			<UserAvatar />
			<AdvanceSearch />
			<Box mt={10}>{/* <JobPost post={payload} /> */}</Box>
		</Box>
	);
};

export default HomePage;
