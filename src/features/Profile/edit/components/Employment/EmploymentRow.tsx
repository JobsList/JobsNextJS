import { IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const EmploymentRow: React.FC = () => {
	return (
		<Stack alignItems="center" flexWrap="wrap" direction="row" mt={20}>
			<TextField placeholder="year start" size="small" sx={{ width: "10%" }} />
			&nbsp; - &nbsp;
			<TextField placeholder="year end" size="small" sx={{ width: "10%" }} />
			&nbsp;
			<TextField placeholder="title" size="small" sx={{ width: "20%" }} />
			&nbsp; @ &nbsp;
			<TextField placeholder="company" size="small" sx={{ width: "20%" }} />
			&nbsp;
			<TextField placeholder="https://" size="small" sx={{ width: "20%" }} />
			<IconButton color="warning">
				<CloseIcon />
			</IconButton>
		</Stack>
	);
};

export default EmploymentRow;
