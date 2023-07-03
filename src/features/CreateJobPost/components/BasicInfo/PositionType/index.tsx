import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { position_type } from "./PositionTypeData";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "@/features/CreateJobPost/ducks/createJobPost.reducer";

const PositionType: React.FC = () => {
	const { payload } = useAppSelect((state) => state.create_job);
	const dispatch = useAppDispatch();

	const { positionType } = payload;

	return (
		<Select
			size="small"
			value={positionType}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({ ...payload, positionType: e.target.value })
				)
			}
		>
			{position_type.map((p) => (
				<MenuItem key={p.value} value={p.value}>
					{p.title}
				</MenuItem>
			))}
		</Select>
	);
};

export default PositionType;
