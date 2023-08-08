/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import Subtitle2 from "../Subtitle2";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";
import ReferenceAndApplyBtn from "./components/ReferenceAndApplyBtn";
import RenderRTEInHtml from "../RenderRTEInHtml";
import { EditorState, convertFromRaw } from "draft-js";

type HowToApplyProps = {
	preview?: boolean;
	post: JOB_POST_PAYLOAD;
};

const HowToApply: React.FC<HowToApplyProps> = ({ post, preview }) => {
	let how_to_apply = null;
	if (typeof post?.job_details?.how_to_apply === "string") {
		how_to_apply = JSON.parse(post?.job_details?.how_to_apply);
	} else {
		how_to_apply = post?.job_details?.how_to_apply;
	}

	return (
		<Box
			sx={{
				width: "80%",
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: "extra.grey",
				margin: (theme) => theme.spacing(5, "auto"),
				borderRadius: (theme) => theme.shape.borderRadius / 5,
				padding: (theme) => theme.spacing(14, 18),
			}}
		>
			<Stack alignItems="center">
				<Title>How do you Apply?</Title>
				{!preview ? <Subtitle2>Process</Subtitle2> : <></>}
			</Stack>
			<ReferenceAndApplyBtn preview={preview} />
			<Typography>
				Here the instructions go on how to apply for this job. Write them in the
				"How to Apply?" box.
			</Typography>
			{how_to_apply && (
				<RenderRTEInHtml
					state={EditorState.createWithContent(
						convertFromRaw(how_to_apply)
					)?.getCurrentContent?.()}
				/>
			)}
		</Box>
	);
};

export default HowToApply;
