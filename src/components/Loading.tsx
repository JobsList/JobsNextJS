import { CircularProgress } from "@mui/material";
import React from "react";

type LoadingProps = {
	visible: boolean;
};

const Loading: React.FC<LoadingProps> = ({ visible }) => {
	if (!visible) {
		return <></>;
	}

	return <CircularProgress color="primary" />;
};

export default Loading;
