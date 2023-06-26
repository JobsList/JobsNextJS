import { MenuItem as MuiMenuItem, Select, styled } from "@mui/material";
import React, { useState } from "react";

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
	color: theme.palette.common.black,
}));

const SortBy: React.FC = () => {
	const [value, setValue] = useState(() => "default");
	return (
		<Select
			sx={{
				borderRadius: (theme) => theme.shape.borderRadius * 3,
				height: "40px",
				minWidth: "30%",
				color: "extra.black",
				fontWeight: (theme) => theme.typography.fontWeightBold,
				backgroundColor: "extra.white",
			}}
			labelId="sort-by"
			value={value}
			onChange={(e) => setValue(e.target.value)}
		>
			<MenuItem value="default">🦴 Sort by</MenuItem>
			<MenuItem value="date">🆕 Latest jobs</MenuItem>
			<MenuItem value="salary">💵 Highest paid</MenuItem>
			<MenuItem value="views">👀 Most viewed</MenuItem>
			<MenuItem value="applied">✅ Most applied</MenuItem>
			<MenuItem value="hot">🔥 Hottest</MenuItem>
			<MenuItem value="benefits">🎪 Most benefits</MenuItem>
		</Select>
	);
};

export default SortBy;
