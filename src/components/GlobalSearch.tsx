import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import Input from "./Input";

const GlobalSearch: React.FC = () => {
	return (
		<form action="/">
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
				name="search_value"
			/>
		</form>
	);
};

export default GlobalSearch;
