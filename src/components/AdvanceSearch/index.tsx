import React, { useState } from "react";
import {
	Autocomplete,
	autocompleteClasses,
	Box,
	Button,
	Grid,
	TextField,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Globe from "@mui/icons-material/Public";
import Money from "@mui/icons-material/AttachMoney";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import AutoComplete from "./components/AutoComplete";
import SortBy from "./components/SortBy";
import { useRouter } from "next/router";
import countryList from "@/utils/countryList.json";
import Input from "../Input";
import { benefits as Benefits } from "@/utils/benefits";

const AdvanceSearch: React.FC = () => {
	const router = useRouter();

	const {
		search_value: searchValue,
		min_per_year: minPerYear,
		locations: _locations,
		benefits: _benefits,
	} = router.query;

	const [search_value, setSearchValue] = useState(() => searchValue || "");
	const [min_per_year, setMinPerYear] = useState(() => minPerYear || "");
	const [benefits, setBenefits] = useState(() => _benefits || "");

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
					<Grid item md={1.5} sm={6}>
						<Autocomplete
							options={countryList}
							placeholder="Locations"
							getOptionLabel={(option) => option.name}
							sx={{
								[`&& .${autocompleteClasses.inputRoot}`]: {
									paddingRight: "15px !important",
									paddingLeft: "15px !important",
									paddingTop: 0,
									paddingBottom: 0,
									marginTop: 0,
								},
								[`&& .MuiOutlinedInput-root`]: {
									padding: (theme) => theme.spacing(1.5),
									fontSize: 14,
								},
							}}
							renderInput={(inputPrams) => (
								<Input
									{...inputPrams}
									placeholder="Locations"
									InputProps={{
										...inputPrams.InputProps,
										startAdornment: (
											<Globe sx={{ fontSize: 20, color: "extra.greyLight" }} />
										),
										endAdornment: (
											<KeyboardArrowDownIcon sx={{ margin: 0, padding: 0 }} />
										),
									}}
									fullWidth
									name="locations"
								/>
							)}
						/>
					</Grid>
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
					<Grid item md={1.5} sm={6}>
						<Autocomplete
							options={Benefits}
							getOptionLabel={(option) => option.value}
							sx={{
								[`&& .${autocompleteClasses.inputRoot}`]: {
									paddingRight: "15px !important",
									paddingLeft: "15px !important",
									paddingTop: 0,
									paddingBottom: 0,
									marginTop: 0,
								},
								[`&& .MuiOutlinedInput-root`]: {
									padding: (theme) => theme.spacing(1.5),
									fontSize: 14,
								},
							}}
							renderInput={(inputPrams) => (
								<Input
									{...inputPrams}
									placeholder="Benefits"
									InputProps={{
										...inputPrams.InputProps,
										startAdornment: (
											<CardGiftcardIcon
												sx={{ fontSize: 20, color: "extra.greyLight" }}
											/>
										),
										endAdornment: (
											<KeyboardArrowDownIcon sx={{ margin: 0, padding: 0 }} />
										),
									}}
									fullWidth
									name="benefits"
								/>
							)}
						/>
					</Grid>
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
