import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";
import React from "react";
import Link from "./Link";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const AutoMatched: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { post_design } = payload;

	return (
		<CheckboxWithBoost
			checked={post_design.auto_matched}
			labelText={
				<Text>
					Get auto matched with suitable applicants from our{" "}
					<Link href="/">directory of remote workers</Link> to share easily
					(+$44)
				</Text>
			}
			onChange={(checked) =>
				dispatch(
					setJobPostPayload({
						...payload,
						post_design: { ...payload.post_design, auto_matched: checked },
					})
				)
			}
		/>
	);
};

export default AutoMatched;
