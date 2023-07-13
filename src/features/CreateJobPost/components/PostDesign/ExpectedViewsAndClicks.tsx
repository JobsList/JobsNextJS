import React from "react";
import { Grid as MUIGrid, TextField, Typography, styled } from "@mui/material";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";

const Grid = styled(MUIGrid)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		marginTop: theme.spacing(5),
	},
}));

const ExpectedViewsAndClicks: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { expected_result } = payload;

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
						value={Math.round(expected_result.views).toLocaleString("en-US")}
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
						value={Math.round(expected_result.clicks).toLocaleString("en-US")}
					/>
				</MUIGrid>
			</Grid>
		</MUIGrid>
	);
};

export default ExpectedViewsAndClicks;
