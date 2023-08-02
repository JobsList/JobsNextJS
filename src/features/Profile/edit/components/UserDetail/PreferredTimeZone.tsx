import React, { useCallback } from "react";
import Label from "./Label";
import { TextField } from "@mui/material";
import EditProfileInput from "./EditProfileInput";
import SubText from "./SubText";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const PreferredTimeZone: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(prefer_time_zone: string) =>
			dispatch(
				setEditProfile({
					...profile,
					prefer_time_zone: prefer_time_zone?.split?.(","),
				})
			),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={<Label text="Your preferred timezones" />}
			subText={
				<SubText
					text={`Please write these as comma separated list of timezones, like 0,+1,+2,+3 or +8,+9,+10 etc. Otherwise the robot can't filter on it`}
				/>
			}
		>
			<TextField
				size="small"
				placeholder="Preferred timezone"
				value={profile.prefer_time_zone.join(",")}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default PreferredTimeZone;
