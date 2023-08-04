import React from "react";
import SalarySelection from "../SalarySelection";
import theme from "@/theme";
import { Divider, Grid } from "@mui/material";
import getPerYear from "@/utils/perYear";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const salary = getPerYear({ min: 1 }).map((s) => ({
	label: `USD ${s} per year`,
	value: s,
}));

const SalaryRange: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { job_details } = payload;

	return (
		<Grid
			container
			gap={5}
			mt={5}
			sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
		>
			<Grid item xs>
				<SalarySelection
					options={[{ label: "Minimum Per Year", value: "min" }, ...salary]}
					value={job_details.min_per_year}
					onSelect={(value) =>
						dispatch(
							setJobPostPayload({
								...payload,
								job_details: {
									...job_details,
									min_per_year: value,
								},
							})
						)
					}
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
					options={[{ label: "Maximum Per Year", value: "max" }, ...salary]}
					value={job_details.max_per_year}
					onSelect={(value) =>
						dispatch(
							setJobPostPayload({
								...payload,
								job_details: {
									...job_details,
									max_per_year: value,
								},
							})
						)
					}
				/>
			</Grid>
		</Grid>
	);
};

export default SalaryRange;
