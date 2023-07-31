import { Box } from "@mui/material";
import React from "react";
import Loading from "./Loading";

type PageLoaderProps = {
	visible: boolean;
};

const PageLoader: React.FC<PageLoaderProps> = ({ visible }) => {
	if (!visible) {
		return <></>;
	}

	return (
		<Box
			sx={{
				position: "absolute",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: "rgba(0, 0, 0, 0.2)",
			}}
		>
			<Loading visible={visible} />
		</Box>
	);
};

export default PageLoader;
