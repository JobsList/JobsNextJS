import InputLabel from "@/components/InputLabel";
import Wysiwyg from "@/components/RichEditor";
import { Box } from "@mui/material";
import React from "react";

type EditorProps = {
	label: string;
};

const Editor: React.FC<EditorProps> = ({ label }) => {
	return (
		<Box component="div">
			<InputLabel>{label}</InputLabel>
			<Wysiwyg />
		</Box>
	);
};

export default Editor;
