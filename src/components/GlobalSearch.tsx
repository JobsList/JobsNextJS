import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import Input from "./Input";

const GlobalSearch: React.FC = () => {
	return (
		<Input
			placeholder="search here"
			InputProps={{
				startAdornment: (
					<SearchOutlinedIcon
						sx={{
							marginLeft: (theme) => theme.spacing(3),
							marginRight: (theme) => theme.spacing(3),
							fontSize: 28,
						}}
					/>
				),
			}}
		/>
	);
};

export default GlobalSearch;
