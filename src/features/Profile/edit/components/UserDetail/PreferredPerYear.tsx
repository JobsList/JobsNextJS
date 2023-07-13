import React from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";
import SubText from "./SubText";

const PreferredPerYear: React.FC = () => {
	return (
		<EditProfileInput
			label={<Label text="Your preferred annual pay (min)" />}
			subText={
				<SubText
					text={`Only profiles with annual pay set are shown on the frontpage. Please write these as US dollars per year in thousands e.g. write 45 for $45,000/year. If you charge by project/day ur, make an estimate of what you make in a year if it'd be full time and enter that.`}
				/>
			}
		>
			<TextField
				size="small"
				type="number"
				InputProps={{
					startAdornment: "US$ ",
					endAdornment: ",000/year",
				}}
			/>
		</EditProfileInput>
	);
};

export default PreferredPerYear;
