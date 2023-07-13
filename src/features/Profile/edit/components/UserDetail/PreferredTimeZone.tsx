import React from "react";
import Label from "./Label";
import { TextField } from "@mui/material";
import EditProfileInput from "./EditProfileInput";
import SubText from "./SubText";

const PreferredTimeZone: React.FC = () => {
	return (
		<EditProfileInput
			label={<Label text="Your preferred timezones" />}
			subText={
				<SubText
					text={`Please write these as comma separated list of timezones, like 0,+1,+2,+3 or +8,+9,+10 etc. Otherwise the robot can't filter on it`}
				/>
			}
		>
			<TextField size="small" placeholder="Preferred timezone" />
		</EditProfileInput>
	);
};

export default PreferredTimeZone;
