import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";
import { useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { useDispatch } from "react-redux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";
import calculateExpectedClickAndViews from "@/utils/calculateExpectedClickAndViews";

const ShowCompanyLogo: React.FC = () => {
	const dispatch = useDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { expected_result, post_design } = payload;
	const { show_logo } = post_design;

	return (
		<CheckboxWithBoost
			checked={show_logo?.active}
			labelText={<Text>Show my ⭐️ company logo besides my post (+$44)</Text>}
			boost={show_logo.boost}
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
							show_logo: {
								...post_design.show_logo,
								active: checked,
							},
						},
					})
				);
			}}
		/>
	);
};

export default ShowCompanyLogo;
