import React from "react";
import { Box, Grid } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Globe from "@mui/icons-material/Public";
import Money from "@mui/icons-material/AttachMoney";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import AutoComplete from "./components/AutoComplete";
import SortBy from "./components/SortBy";

const AdvanceSearch: React.FC = () => {
	return (
		<Box component="div" mt={10}>
			<Grid container columnGap={5} rowGap={5}>
				<Grid item md={1.5} sm={6}>
					<AutoComplete
						placeholder="Search"
						StartIcon={SearchOutlinedIcon}
						options={[
							{
								title: "Engineer",
								value: "engineer",
							},
						]}
					/>
				</Grid>
				<Grid item md={1.5} sm={6}>
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
				</Grid>
				<Grid item md={1.5} sm={6}>
					<AutoComplete
						placeholder="Salary"
						StartIcon={Money}
						options={[
							{
								title: "Engineer",
								value: "engineer",
							},
						]}
					/>
				</Grid>
				<Grid item md={1.5} sm={6}>
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
				</Grid>
				<Grid
					item
					md={5}
					sm={6}
					display="flex"
					justifyContent="flex-end"
					alignItems="flex-end"
				>
					<SortBy />
				</Grid>
			</Grid>
		</Box>
	);
};

export default AdvanceSearch;
