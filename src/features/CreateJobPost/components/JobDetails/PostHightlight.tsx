/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";
import React from "react";
import ColorPicker from "@/components/ColorPicker";
import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import BoostTag from "@/components/BoostTag";

const PostHightlight: React.FC = () => {
	return (
		<Stack direction="row" mt={10} columnGap={5} alignItems="center">
			<CheckboxWithBoost
				labelText={
					<Typography>
						Highlight with your company's 🌈 brand color (+$499) 👉
					</Typography>
				}
			/>
			<ColorPicker />
			<BoostTag boostText="3x more views" />
		</Stack>
	);
};

export default PostHightlight;
