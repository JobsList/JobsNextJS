import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import type { EditorProps as DraftEditorProps } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import theme from "@/theme";

type EditorProps = DraftEditorProps & {
	editorHeight?: string | number;
};

const Editor: React.FC<EditorProps> = (props) => {
	const { editorHeight = "60vh" } = props;
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const onChange = (editor: EditorState) => {
		setEditorState(editor);
	};

	return (
		<DraftEditor
			{...props}
			editorState={editorState}
			onEditorStateChange={onChange}
			wrapperStyle={{
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: theme.palette.extra.grey,
				borderRadius: theme.shape.borderRadius,
				overflow: "hidden",
			}}
			toolbarStyle={{
				backgroundColor: theme.palette.extra.white,
				borderTopWidth: 0,
				borderBottomWidth: 1,
				borderBottomColor: theme.palette.extra.grey,
			}}
			editorStyle={{
				padding: theme.spacing(5),
				minHeight: editorHeight,
				backgroundColor: theme.palette.extra.backgroundColor,
			}}
			toolbar={{
				options: ["history", "inline", "blockType", "list", "link"],
				inline: {
					options: ["bold", "italic"],
				},
				blockType: {
					inDropdown: false,
					options: ["H1", "H2"],
				},
				link: {
					inDropdown: false,
					options: ["link"],
				},
			}}
		/>
	);
};

export default Editor;
