import React from "react";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Title from "../Title";

const Appbar: React.FC = () => {
	return (
		<AppBar
			position="relative"
			elevation={1}
			sx={{ borderBottomWidth: 1, backgroundColor: "extra.white", mb: 10 }}
		>
			<Toolbar>
				<Stack
					flex={1}
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					paddingX={5}
				>
					<Title textAlign="center" color="#000">
						Logo
					</Title>
					<Title color="extra.black">Hire remotely</Title>
					<Button disableElevation variant="contained" size="large">
						Buy a bundle <TrendingFlatIcon sx={{ ml: 10 }} />
					</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Appbar;
