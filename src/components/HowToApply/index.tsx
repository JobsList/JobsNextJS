/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import Subtitle2 from "../Subtitle2";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";
import ReferenceAndApplyBtn from "./components/ReferenceAndApplyBtn";
import RenderRTEInHtml from "../RenderRTEInHtml";

type HowToApplyProps = {
	preview?: boolean;
	post: JOB_POST_PAYLOAD;
};

const HowToApply: React.FC<HowToApplyProps> = ({ post, preview }) => {
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

			{!preview ? (
				<>
					<Typography>
						Here the instructions go on how to apply for this job. Write them in
						the "How to Apply?" box.
					</Typography>
				</>
			) : (
				<RenderRTEInHtml
					state={post.job_details.howToApply.getCurrentContent()}
				/>
			)}
		</Box>
	);
};

export default HowToApply;
