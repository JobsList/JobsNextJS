/* eslint-disable react/no-unescaped-entities */
import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Subtitle2 from "@/components/Subtitle2";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { Typography } from "@mui/material";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const PayLater: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { company_detail } = payload;

	return (
		<React.Fragment>
			<Subtitle2>Pay Later</Subtitle2>
			<CheckboxWithBoost
				labelText={<Typography>I'd like to pay later</Typography>}
				checked={company_detail.pay_later}
				onChange={(checked) =>
					dispatch(
						setJobPostPayload({
							...payload,
							company_detail: {
								...company_detail,
								pay_later: checked,
							},
						})
					)
				}
			/>
		</React.Fragment>
	);
};

export default PayLater;
