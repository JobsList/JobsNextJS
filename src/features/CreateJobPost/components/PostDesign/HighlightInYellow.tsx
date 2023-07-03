import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";
import calculateExpectedClickAndViews from "@/utils/calculateExpectedClickAndViews";

const HighlightInYellow: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { post_design, expected_result } = payload;

	return (
		<CheckboxWithBoost
			checked={post_design.highlight.active}
			labelText={<Text>Highlight your post in ⚠️ yellow (+$49)</Text>}
			boost={post_design.highlight.boost}
			onChange={(checked) => {
				const result = calculateExpectedClickAndViews(
					2,
					expected_result,
					checked ? "MULTIPLY" : "DIVIDE"
				);
				dispatch(
					setJobPostPayload({
						...payload,
						expected_result: result,
						post_design: {
							...post_design,
							highlight: { ...post_design.highlight, active: checked },
						},
					})
				);
			}}
		/>
	);
};

export default HighlightInYellow;
