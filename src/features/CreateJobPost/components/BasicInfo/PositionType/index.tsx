import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { positionType } from "./PositionTypeData";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "@/features/CreateJobPost/ducks/createJobPost.reducer";

const PositionType: React.FC = () => {
	const { payload } = useAppSelect((state) => state.create_job);
	const dispatch = useAppDispatch();

	const { position_type } = payload;

	return (
		<Select
			size="small"
			value={position_type}
			onChange={(e) =>
				dispatch(
					setJobPostPayload({ ...payload, position_type: e.target.value })
				)
			}
		>
			{positionType.map((p) => (
				<MenuItem key={p.value} value={p.value}>
					{p.title}
				</MenuItem>
			))}
		</Select>
	);
};

export default PositionType;
