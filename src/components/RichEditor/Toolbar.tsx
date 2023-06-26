import { Button, Divider, Stack } from "@mui/material";
import { EditorState, Modifier } from "draft-js";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import BoldIcon from "@mui/icons-material/FormatBold";
import ListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import IndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";
import IndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";

type ToolbarProps = {
	onChange?: (editorState: EditorState) => void;
	editorState?: EditorState;
};

const Toolbar: React.FC<ToolbarProps> = () => {
	const onChangeState = (editorState: EditorState) => {};
	return (
		<Stack
			direction="row"
			sx={{ padding: (theme) => theme.spacing(5, 0) }}
			flexWrap="wrap"
			columnGap={5}
			rowGap={5}
		>
			<Button size="large">
				<UndoIcon />
			</Button>
			<Button size="large">
				<RedoIcon />
			</Button>

			<Divider orientation="vertical" />
			<Button size="large">
				<BoldIcon />
			</Button>
			<Button size="large">
				<ItalicIcon />
			</Button>

			<Divider orientation="vertical" />
			<Button size="large">H1</Button>
			<Button size="large">H2</Button>

			<Divider orientation="vertical" />
			<Button size="large">
				<ListBulletedIcon />
			</Button>
			<Button size="large">
				<ListNumberedIcon />
			</Button>

			<Divider orientation="vertical" />
			<Button size="large">
				<IndentDecreaseIcon />
			</Button>
			<Button size="large">
				<IndentIncreaseIcon />
			</Button>

			<Divider orientation="vertical" />
			<Button size="large">
				<LinkIcon />
			</Button>
		</Stack>
	);
};

export default Toolbar;
