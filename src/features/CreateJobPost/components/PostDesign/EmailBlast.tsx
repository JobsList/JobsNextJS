import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import calculateExpectedClickAndViews from "@/utils/calculateExpectedClickAndViews";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const EmailBlast: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { expected_result, post_design } = payload;
	const { email_blast } = post_design;

	return (
		<CheckboxWithBoost
			checked={email_blast.active}
			labelText={
				<Text>
					Email blast my job post to 📮 625,874 remote candidates (+$89)
				</Text>
			}
			boost={email_blast.boost}
			onChange={(checked) => {
				const result = calculateExpectedClickAndViews(
					email_blast.boost,
					expected_result,
					checked ? "MULTIPLY" : "DIVIDE"
				);

				dispatch(
					setJobPostPayload({
						...payload,
						expected_result: result,
						post_design: {
							...post_design,
							email_blast: {
								...email_blast,
								active: checked,
							},
						},
					})
				);
			}}
		/>
	);
};

export default EmailBlast;
