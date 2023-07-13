/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Stack, Typography } from "@mui/material";

import Button from "@/components/Button";

type ReferenceAndApplyBtnProps = {
	preview?: boolean;
};

const ReferenceAndApplyBtn: React.FC<ReferenceAndApplyBtnProps> = ({
	preview,
}) => {
	return (
		<Stack alignItems="center" mt={5}>
			{preview ? (
				<Typography>
					Here is the instructions go on how to apply for this job. Write them
					in the "How to Apply?" box.
				</Typography>
			) : (
				<></>
			)}
			<Button
				preview={preview}
				variant={preview ? "outlined" : "contained"}
				fullWidth={!preview}
				size="large"
				sx={{
					marginTop: (theme) => theme.spacing(10),
				}}
			>
				Apply to this job
			</Button>

			{!preview ? (
				<Typography
					fontWeight={(theme) => theme.typography.fontWeightBold}
					textAlign="center"
					mt={10}
					mb={10}
				>
					👉 Please reference you found the job on Job Search, this helps us get
					more companies to post here, thanks!
				</Typography>
			) : (
				<></>
			)}
		</Stack>
	);
};

export default ReferenceAndApplyBtn;
