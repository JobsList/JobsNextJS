import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Globe from "@mui/icons-material/Public";
import Money from "@mui/icons-material/AttachMoney";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import AutoComplete from "./components/AutoComplete";
import SortBy from "./components/SortBy";
import { useRouter } from "next/router";

const AdvanceSearch: React.FC = () => {
	const router = useRouter();

	const { search_value: searchValue, min_per_year: minPerYear } = router.query;

	const [search_value, setSearchValue] = useState(() => searchValue || "");
	const [min_per_year, setMinPerYear] = useState(() => minPerYear || "");

	return (
		<Box component="div" mt={10}>
			<form action="/">
				<Grid container columnGap={5} rowGap={5}>
					<Grid item md={1.5} sm={6}>
						<TextField
							InputProps={{
								startAdornment: <SearchOutlinedIcon />,
								sx: {
									borderRadius: (theme) => theme.shape.borderRadius,
								},
							}}
							value={search_value}
							placeholder="Search"
							size="small"
							inputMode="search"
							name="search_value"
							onChange={(e) => setSearchValue(e.target.value)}
						/>
						{/* <AutoComplete
						placeholder="Search"
						StartIcon={SearchOutlinedIcon}
						options={[
							{
								title: "Engineer",
								value: "engineer",
							},
						]}
					/> */}
					</Grid>
					{/* <Grid item md={1.5} sm={6}>
					<AutoComplete
						placeholder="Location"
						StartIcon={Globe}
						options={[
							{
								title: "Engineer",
								value: "engineer",
							},
						]}
					/>
				</Grid> */}
					<Grid item md={1.5} sm={6}>
						<TextField
							InputProps={{
								startAdornment: <Money />,
								sx: {
									borderRadius: (theme) => theme.shape.borderRadius,
								},
							}}
							value={min_per_year}
							placeholder="Salary"
							size="small"
							inputMode="search"
							name="min_per_year"
							onChange={(e) => setMinPerYear(e.target.value)}
						/>
						{/* <AutoComplete
						placeholder="Salary"
						StartIcon={Money}
						options={[
							{
								title: "Engineer",
								value: "engineer",
							},
						]}
					/> */}
					</Grid>
					{/* <Grid item md={1.5} sm={6}>
					<AutoComplete
						placeholder="Benefits"
						StartIcon={CardGiftcardIcon}
						options={[
							{
								title: "Engineer",
								value: "engineer",
							},
						]}
					/>
				</Grid> */}
					{/* <Grid
					item
					md={5}
					sm={6}
					display="flex"
					justifyContent="flex-end"
					alignItems="flex-end"
				>
					<SortBy />
				</Grid> */}
				</Grid>
				<Button sx={{ display: "hidden" }} type="submit" />
			</form>
		</Box>
	);
};

export default AdvanceSearch;
