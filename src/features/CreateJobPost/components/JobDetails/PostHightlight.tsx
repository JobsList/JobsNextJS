/* eslint-disable react/no-unescaped-entities */
import { Stack, Typography } from "@mui/material";
import React from "react";
import ColorPicker from "@/components/ColorPicker";
import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import BoostTag from "@/components/BoostTag";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const PostHightlight: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { job_details } = payload;

	return (
		<Stack direction="row" mt={10} columnGap={5} alignItems="center">
			<CheckboxWithBoost
				checked={job_details.highlight?.active}
				labelText={
					<Typography>
						Highlight with your company's 🌈 brand color (+$499) 👉
					</Typography>
				}
				onChange={(checked) =>
					dispatch(
						setJobPostPayload({
							...payload,
							job_details: {
								...job_details,
								highlight: {
									...job_details.highlight,
									active: checked,
								},
							},
						})
					)
				}
			/>
			<ColorPicker
				color={job_details.highlight.color}
				onChange={(color) =>
					dispatch(
						setJobPostPayload({
							...payload,
							job_details: {
								...job_details,
								highlight: {
									...job_details.highlight,
									color: color,
								},
							},
						})
					)
				}
			/>
			<BoostTag boostText="3x more views" />
		</Stack>
	);
};

export default PostHightlight;
