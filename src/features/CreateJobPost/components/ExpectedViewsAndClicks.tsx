import React from "react";
import { Grid as MUIGrid, TextField, Typography, styled } from "@mui/material";

const Grid = styled(MUIGrid)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		marginTop: theme.spacing(5),
	},
}));

const ExpectedViewsAndClicks = () => {
	return (
		<MUIGrid mt={9} ml={9} container>
			<MUIGrid
				item
				container
				columnGap={5}
				md={5}
				sx={{ display: "flex", alignItems: "center" }}
			>
				<MUIGrid item>
					<Typography fontWeight={(theme) => theme.typography.fontWeightBold}>
						Expected Views
					</Typography>
				</MUIGrid>
				<MUIGrid item>
					<TextField
						InputProps={{
							readOnly: true,
						}}
						size="small"
					/>
				</MUIGrid>
			</MUIGrid>

			<Grid
				item
				container
				columnGap={5}
				md={5}
				sx={{ display: "flex", alignItems: "center" }}
			>
				<MUIGrid item>
					<Typography fontWeight={(theme) => theme.typography.fontWeightBold}>
						Expected Clicks
					</Typography>
				</MUIGrid>
				<MUIGrid item>
					<TextField
						InputProps={{
							readOnly: true,
						}}
						size="small"
					/>
				</MUIGrid>
			</Grid>
		</MUIGrid>
	);
};

export default ExpectedViewsAndClicks;
