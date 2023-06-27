import InputLabel from "@/components/InputLabel";
import Wysiwyg from "@/components/RichEditor";
import { Box } from "@mui/material";
import React from "react";

type EditorProps = {
	label: string;
	height?: string;
};

const Editor: React.FC<EditorProps> = ({ label, height }) => {
	return (
		<Box component="div">
			<InputLabel sx={{ marginBottom: (theme) => theme.spacing(10) }}>
				{label}
			</InputLabel>
			<Wysiwyg editorHeight={height} />
		</Box>
	);
};

export default Editor;
