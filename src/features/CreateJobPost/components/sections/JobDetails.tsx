/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import CheckboxWithBoost from "../CheckboxWithBoost";
import BoostTag from "../BoostTag";
import LegalSalaryNote from "../LegalSalaryNote";
import ColorPicker from "@/components/ColorPicker";
import SalarySelection from "../SalarySelection";
import theme from "@/theme";
import CardWithTitle from "@/components/CardWithTitle";
import UploadFile from "@/components/UploadFile";
import Editor from "../Editor";
import Benefits from "../Benefits";
import HowToApply from "../HowToApply";
import InputWithLabel from "@/components/InputWithLabel";

const JobDetails = () => {
	return (
		<CardWithTitle title="Job Details">
			<UploadFile />
			<Stack direction="row" mt={10} columnGap={5} alignItems="center">
				<CheckboxWithBoost
					labelText={
						<Typography>
							Highlight with your company's 🌈 brand color (+$499) 👉
						</Typography>
					}
				/>
				<ColorPicker />
				<BoostTag boostText="3x more views" />
			</Stack>

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

			<LegalSalaryNote />

			<Editor label="Job Description" />

			<Benefits />

			<HowToApply />

			<InputWithLabel
				label="Apply URL *"
				helperText={`Apply URLs with a form an applicant can fill out generally receive a lot more applicants than having people apply by email (below). A good platform to have applicants apply on is Lever (not affiliated). `}
				mt={10}
				mb={10}
			/>

			<Divider>Or</Divider>

			<InputWithLabel
				label="Apply email address *"
				helperText={`This email is public (!), the [ Apply ] button links to it if you do not specify an Apply URL above. `}
				mt={10}
				mb={10}
			/>
		</CardWithTitle>
	);
};

export default JobDetails;
