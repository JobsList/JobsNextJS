/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";

import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const Gelock: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { expected_result, post_design } = payload;

	const onChange = (checked: boolean) => {
		let isConfirmed = false;
		if (checked) {
			isConfirmed = confirm(
				`Are you sure you want to Geolock applications? Posts with geolock get up to 10x less views and applications. But better targeted and thus higher quality so it can be worth it.`
			);
		}

		const _expected_result = { ...expected_result };

		if (isConfirmed && checked) {
			_expected_result.clicks = _expected_result.clicks * 0.1;
			_expected_result.views = _expected_result.views * 0.1;
		} else if (!checked) {
			_expected_result.clicks = _expected_result.clicks * 10;
			_expected_result.views = _expected_result.views * 10;
		}

		dispatch(
			setJobPostPayload({
				...payload,
				post_design: {
					...post_design,
					geolock: isConfirmed && checked,
				},
				expected_result: _expected_result,
			})
		);
	};

	return (
		<CheckboxWithBoost
			onChange={onChange}
			checked={post_design.geolock}
			labelText={
				<Text>
					Geolock your post for people only in the location it's restricted to
					above and block applicants from elsewhere (+$89)
				</Text>
			}
		/>
	);
};

export default Gelock;
