import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const Premium: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { post_design } = payload;

	return (
		<CheckboxWithBoost
			checked={post_design.premium}
			onChange={(checked) =>
				dispatch(
					setJobPostPayload({
						...payload,
						post_design: { ...post_design, premium: checked },
					})
				)
			}
			labelText={
				<Text>Get 🙋‍♀️ premium support and help with your job posts (+$89)</Text>
			}
		/>
	);
};

export default Premium;
