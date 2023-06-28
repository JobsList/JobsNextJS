import Text from "@/components/Text";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import calculateExpectedClickAndViews, {
	DEFAULT_CLICKS,
} from "@/utils/calculateExpectedClickAndViews";
import React from "react";
import { STICKY_POST_TYPE } from "../../ducks/createJobPost.store";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";
import RadioButtonWithCheckbox from "@/components/RadioButtonWithCheckbox";
import { RadioGroup } from "@mui/material";

const StickyPost: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { expected_result, post_design } = payload;
	const { sticky } = post_design;

	const onChange = (
		checked: boolean,
		boost: number,
		type: STICKY_POST_TYPE
	) => {
		const clicks = checked ? DEFAULT_CLICKS * boost : DEFAULT_CLICKS;
		const result = calculateExpectedClickAndViews(
			boost,
			expected_result,
			checked ? "MULTIPLY" : "DIVIDE"
		);

		console.log("===> ", checked, !checked ? result.clicks - clicks : null);

		dispatch(
			setJobPostPayload({
				...payload,
				expected_result: result,
				post_design: {
					...post_design,
					sticky: {
						...sticky,
						type: checked ? type : undefined,
						active: checked,
					},
				},
			})
		);
	};

	return (
		<React.Fragment>
			<RadioGroup value={sticky.type}>
				<RadioButtonWithCheckbox
					value="hours"
					// checked={sticky.type === "hours" ? true : false}
					labelText={
						<Text>
							Sticky your post so it says on 📌 top of frontpage for ⏰ 24 hours
							(+$134)
						</Text>
					}
					boost={sticky.hoursBoost}
					onChange={(checked) => onChange(checked, sticky.hoursBoost, "hours")}
				/>

				<RadioButtonWithCheckbox
					// checked={sticky.type === "week" ? true : false}
					value="week"
					labelText={
						<Text>
							Sticky your post so it says on 📌 top of frontpage for 🗓️ 1 week
							(+$334)
						</Text>
					}
					boost={sticky.weekBoost}
					onChange={(checked) => onChange(checked, sticky.weekBoost, "week")}
				/>

				<RadioButtonWithCheckbox
					value="month"
					// checked={sticky.type === "month" ? true : false}
					labelText={
						<Text>
							Sticky your post so it says on 📌 top of frontpage for 🗓️ 1 month
							(+$942)
						</Text>
					}
					boost={sticky.monthBoost}
					onChange={(checked) => onChange(checked, sticky.monthBoost, "month")}
				/>
			</RadioGroup>
		</React.Fragment>
	);
};

export default StickyPost;
