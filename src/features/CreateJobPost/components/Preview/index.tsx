/* eslint-disable react/no-unescaped-entities */
import CardWithTitle from "@/components/CardWithTitle";
import JobPost from "@/components/JobPost";
import Subtitle1 from "@/components/Subtitle1";
import { useAppSelect } from "@/hooks/useRedux";
import { Box, Typography } from "@mui/material";
import React from "react";

const Preview: React.FC = () => {
	const { payload } = useAppSelect((state) => state.create_job);

	return (
		<CardWithTitle title="Preview">
			<Subtitle1 textAlign="center">
				Here's a preview of how your job post will look like
			</Subtitle1>
			<Typography textAlign="center">
				Don't worry if it's not perfect the first time: your job is fully
				editable for free after posting it!
			</Typography>

			<Box
				mt={30}
				sx={{
					boxShadow: "inset 0px 0px 10px rgba(0, 0, 0, 0.1)",
					padding: (theme) => theme.spacing(20, 5),
					borderRadius: (theme) => theme.shape.borderRadius / 6,
					backgroundColor: "extra.white",
				}}
			>
				<JobPost expandable={false} expanded borderd={false} post={payload} />
			</Box>
		</CardWithTitle>
	);
};

export default Preview;
