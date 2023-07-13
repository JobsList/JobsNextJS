import React from "react";
import { AppBar, Stack, Toolbar } from "@mui/material";
import Title from "../Title";

type AppbarProps = {
	children: React.ReactNode;
};

const Appbar: React.FC<AppbarProps> = (props) => {
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
					{props.children}
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Appbar;
