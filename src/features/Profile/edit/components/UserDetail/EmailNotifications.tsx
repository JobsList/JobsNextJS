import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { Checkbox } from "@mui/material";
import Label from "./Label";
import SubText from "./SubText";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const EmailNotifications: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(email_notification: boolean) =>
			dispatch(setEditProfile({ ...profile, email_notification })),
		[profile, dispatch]
	);
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
			<Checkbox
				size="small"
				checked={profile.email_notification}
				onChange={(_, checked) => onChange(checked)}
			/>
		</EditProfileInput>
	);
};

export default EmailNotifications;
