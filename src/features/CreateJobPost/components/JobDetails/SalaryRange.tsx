import React from "react";
import SalarySelection from "../SalarySelection";
import theme from "@/theme";
import { Divider, Grid } from "@mui/material";

const SalaryRange: React.FC = () => {
	return (
		<Grid
			container
			gap={5}
			mt={5}
			sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
		>
			<Grid item xs>
				<SalarySelection
					options={[{ label: "Minimum Per Year", value: "min" }]}
				/>
			</Grid>
			<Grid
				item
				md={0.2}
				sx={{
					[theme.breakpoints.down("md")]: {
						display: "none",
					},
				}}
			>
				<Divider
					orientation="horizontal"
					sx={{ borderColor: "bw.black" }}
				></Divider>
			</Grid>
			<Grid item xs>
				<SalarySelection
					options={[{ label: "Maximum Per Year", value: "max" }]}
				/>
			</Grid>
		</Grid>
	);
};

export default SalaryRange;
