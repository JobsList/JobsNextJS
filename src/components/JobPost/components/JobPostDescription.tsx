import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Title from "@/components/Title";
import JobPostMission from "./JobPostMission";

const JobPostDescription = () => {
	return (
		<Box>
			<Typography variant="h5">Scale AI is hiring a </Typography>
			<Title mt={4} mb={4}>
				Remote Product Engineer
			</Title>
			<Typography>
				Klu is building at the intersection of artificial intelligence,
				creativity, and the future of work. Join our team and build something
				truly career defining. The Klu platform is a Python monolith with a
				Typescript/T3 stack interface we call Klu Studio. Klu enables our
				customers to expand their existing SaaS products or streamline internal
				operations with GenAI functionality.
				<br />
				<br />
				The team is fully remote, everyone writes code, we work closely with our
				customers, and we have no mandatory meetings. The founding team is
				experienced (leading EPD teams at Amazon, Productboard, and Skyscanner)
				and we have amazing advisors from exceptional companies (Personio, Scale
				AI, Segment) and funds (A16Z, Atomico, Craft, FMC).
				<br />
				<br />
				We ship often: https://ship.klu.ai/
				<br />
				<br />
				Bonus points for: you’ve explored LLMs and have an experiment you can
				show us.
			</Typography>

			<Divider sx={{ mb: 10, mt: 10 }} />
			<JobPostMission />
		</Box>
	);
};

export default JobPostDescription;
