import { IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const SideProjectRow: React.FC = () => {
	return (
		<Stack alignItems="center" flexWrap="wrap" direction="row" mt={20}>
			<TextField placeholder="year start" size="small" sx={{ width: "10%" }} />
			&nbsp; - &nbsp;
			<TextField placeholder="year end" size="small" sx={{ width: "10%" }} />
			&nbsp;
			<TextField
				placeholder="project name"
				size="small"
				sx={{ width: "20%" }}
			/>
			&nbsp;
			<TextField placeholder="url" size="small" sx={{ width: "20%" }} />
			<IconButton color="warning">
				<CloseIcon />
			</IconButton>
		</Stack>
	);
};

export default SideProjectRow;
