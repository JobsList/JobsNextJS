import { CircularProgress } from "@mui/material";
import React from "react";

type LoadingProps = {
	visible: boolean;
	color?:
		| "primary"
		| "secondary"
		| "error"
		| "info"
		| "success"
		| "warning"
		| "inherit";
};

const Loading: React.FC<LoadingProps> = ({ visible, color = "primary" }) => {
	if (!visible) {
		return <></>;
	}

	return <CircularProgress color={color} />;
};

export default Loading;
