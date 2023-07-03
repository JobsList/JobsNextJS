import { Box } from "@mui/material";
import React from "react";
import JobPost from "@/components/JobPost";
import AdvanceSearch from "@/components/AdvanceSearch";

import HomePageHeader from "./components/HomePageHeader";
import { useAppSelect } from "@/hooks/useRedux";

const HomePage: React.FC = () => {
	const { payload } = useAppSelect((state) => state.create_job);
	return (
		<Box>
			<HomePageHeader />
			<AdvanceSearch />
			<Box mt={10}>{/* <JobPost post={payload} /> */}</Box>
		</Box>
	);
};

export default HomePage;
