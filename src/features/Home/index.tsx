import { Box } from "@mui/material";
import React from "react";
import JobPost from "@/components/JobPost";
import AdvanceSearch from "@/components/AdvanceSearch";

import HomePageHeader from "./components/HomePageHeader";

const HomePage = () => {
	return (
		<Box>
			<HomePageHeader />
			<AdvanceSearch />

			<Box mt={10}>
				<JobPost />
			</Box>
		</Box>
	);
};

export default HomePage;
