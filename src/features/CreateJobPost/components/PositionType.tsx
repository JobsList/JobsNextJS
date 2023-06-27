import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const PositionType = () => {
	const [value, setValue] = useState(() => "full-time");

	return (
		<Select
			size="small"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		>
			<MenuItem value="full-time">Full-time</MenuItem>
			<MenuItem value="part-time">Part-time</MenuItem>
			<MenuItem value="contractor">Contractor</MenuItem>
			<MenuItem value="temporary">Temporary</MenuItem>
			<MenuItem value="intern">Internship</MenuItem>
			<MenuItem value="per-diem">Per diem</MenuItem>
			<MenuItem value="volunteer">Volunteer</MenuItem>
		</Select>
	);
};

export default PositionType;
