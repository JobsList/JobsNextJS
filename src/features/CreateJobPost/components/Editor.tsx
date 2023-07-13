import InputLabel from "@/components/InputLabel";
import Wysiwyg from "@/components/RichEditor";
import { Box } from "@mui/material";
import { ContentState } from "draft-js";
import React from "react";
import { EditorState } from "react-draft-wysiwyg";

type EditorProps = {
	label: string;
	height?: string;
	editorState?: EditorState;
	onChange?: (state: EditorState) => void;
};

const Editor: React.FC<EditorProps> = ({
	label,
	height,
	editorState,
	onChange,
}) => {
	return (
		<Box component="div">
			<InputLabel sx={{ marginBottom: (theme) => theme.spacing(10) }}>
				{label}
			</InputLabel>
			<Wysiwyg
				editorHeight={height}
				editorState={editorState}
				onEditorStateChange={onChange}
			/>
		</Box>
	);
};

export default Editor;
