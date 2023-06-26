import { Box, Typography } from "@mui/material";
import React from "react";

type HomeProps = {
	data: Array<any>;
};

const Home: React.FC<HomeProps> = ({ data }) => {
	return (
		<>
			<Typography>Home Page</Typography>
			<code>{data ? JSON.stringify(data) : null}</code>
		</>
	);
};

export default Home;
