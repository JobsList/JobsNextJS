import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import SubText from "./SubText";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const EmailInput: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(email: string) => dispatch(setEditProfile({ ...profile, email })),
		[profile, dispatch]
	);

	return (
		<EditProfileInput
			label={<Label text="Email" />}
			subText={
				<SubText
					text={`We never display this on the site, but you use this for logging in.
				And we forward you messages from employers, as well as send you
				notifications.`}
				/>
			}
		>
			<TextField
				size="small"
				type="email"
				value={profile.email}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default EmailInput;
