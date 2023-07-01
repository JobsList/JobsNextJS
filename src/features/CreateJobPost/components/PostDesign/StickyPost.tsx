import Text from "@/components/Text";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import calculateExpectedClickAndViews from "@/utils/calculateExpectedClickAndViews";
import React from "react";
import { STICKY_POST_TYPE } from "../../ducks/createJobPost.store";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";
import CheckboxWithBoost from "@/components/CheckboxWithBoost";

const StickyPost: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { expected_result, post_design } = payload;
	const { sticky } = post_design;

	const onChange = (
		checked: boolean,
		boost: number,
		type?: STICKY_POST_TYPE
	) => {
		/**
		 * Steps to do sticky post calculation
		 * 1. check if there is any previous `type` available in the redux state.
		 * 2. If there is any previous `type` available in the redux state then remove that previous value
		 * 		and add a new value
		 */

		const _expected_result = { ...expected_result };

		// Before updating the redux state
		if (sticky.type && checked && type) {
			let boostType: keyof typeof sticky = `${sticky.type}Boost`;

			// This will handle the previous checkbox of sticky section.
			// i.e if the 2x more is checked and if the user clicks on 6x more view checkbox then
			// it should remove the previous 2x more clicks and views number;
			if (sticky[`${boostType}`]) {
				_expected_result.clicks = _expected_result.clicks / sticky[boostType];
				_expected_result.views = _expected_result.views / sticky[boostType];
			}
		}

		const result = calculateExpectedClickAndViews(
			boost,
			_expected_result,
			checked ? "MULTIPLY" : "DIVIDE"
		);

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
			<CheckboxWithBoost
				checked={sticky.type === "hours"}
				labelText={
					<Text>
						Sticky your post so it says on 📌 top of frontpage for ⏰ 24 hours
						(+$134)
					</Text>
				}
				boost={sticky.hoursBoost}
				onChange={(checked) =>
					onChange(checked, sticky.hoursBoost, checked ? "hours" : undefined)
				}
			/>

			<CheckboxWithBoost
				checked={sticky.type === "week"}
				labelText={
					<Text>
						Sticky your post so it says on 📌 top of frontpage for 🗓️ 1 week
						(+$334)
					</Text>
				}
				boost={sticky.weekBoost}
				onChange={(checked) =>
					onChange(checked, sticky.weekBoost, checked ? "week" : undefined)
				}
			/>

			<CheckboxWithBoost
				checked={sticky.type === "month"}
				labelText={
					<Text>
						Sticky your post so it says on 📌 top of frontpage for 🗓️ 1 month
						(+$942)
					</Text>
				}
				boost={sticky.monthBoost}
				onChange={(checked) =>
					onChange(checked, sticky.monthBoost, checked ? "month" : undefined)
				}
			/>
		</React.Fragment>
	);
};

export default StickyPost;
