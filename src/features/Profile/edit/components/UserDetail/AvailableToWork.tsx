import React, { useState } from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { Checkbox, TextField, Typography } from "@mui/material";
import SubText from "./SubText";

const AvailableToWork: React.FC = () => {
	const [date, setDate] = useState<string>(() =>
		new Date().toLocaleDateString(undefined, {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		})
	);

	return (
		<EditProfileInput
			label={<Label text="Available for work" />}
			subText={
				<SubText
					text={`You'll only be able to receive job offers and get contacted if you're set to available.`}
				/>
			}
		>
			<Checkbox /> <Typography>from</Typography>&nbsp;
			<TextField
				type="date"
				size="small"
				value={date}
				inputProps={{
					defaultValue: date,
				}}
				onChange={(e) => {
					setDate(e.target.value);
				}}
			/>
		</EditProfileInput>
	);
};

export default AvailableToWork;
