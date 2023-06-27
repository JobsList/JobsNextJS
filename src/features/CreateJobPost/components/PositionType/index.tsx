import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { position_type } from "./PositionTypeData";

const PositionType: React.FC = () => {
	const [value, setValue] = useState(() => "full-time");

	return (
		<Select
			size="small"
			value={value}
			onChange={(e) => setValue(e.target.value)}
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
