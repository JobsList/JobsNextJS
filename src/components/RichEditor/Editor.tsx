import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor as DraftEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import theme from "@/theme";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import Toolbar from "./Toolbar";

type EditorProps = {
	editorHeight?: string | number;
};

const Editor: React.FC<EditorProps> = ({ editorHeight = "60vh" }) => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const onChange = (editor: EditorState) => {
		setEditorState(editor);
	};

	return (
		<DraftEditor
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
				// padding: 0,
			}}
			editorStyle={{
				padding: theme.spacing(5),
				minHeight: editorHeight,
				backgroundColor: theme.palette.extra.backgroundColor,
			}}
			// toolbarCustomButtons={[<Toolbar key="toolbar-headert" />]}
			toolbar={{
				options: ["inline", "blockType"],
				blockType: {
					inDropdown: true,
					options: ["Normal", "H1", "H2"],
				},
			}}
		/>
	);
};

export default Editor;
