import React from "react";
import EditProfileInput from "./EditProfileInput";
import { Checkbox } from "@mui/material";
import Label from "./Label";
import SubText from "./SubText";

const EmailNotifications: React.FC = () => {
	return (
		<EditProfileInput
			label={<Label text="Email notifications" />}
			subText={
				<SubText
					text={`Get emails from us, for example when a job matching your profile is
            posted on Remote OK or other messages related to your profile.`}
				/>
			}
		>
			<Checkbox size="small" />
		</EditProfileInput>
	);
};

export default EmailNotifications;
