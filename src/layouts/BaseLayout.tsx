import PageHeader from "@/components/PageHeader";
import { Box, Container } from "@mui/material";
import React from "react";

type BaseLayoutProps = {
	children: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
	return (
		<Box component="div">
			<PageHeader />
			<Container maxWidth="lg">{props.children}</Container>
		</Box>
	);
};

export default BaseLayout;
