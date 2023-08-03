import React, { useCallback, useEffect, useState } from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile, setError } from "../../ducks/edit_profile.reducer";
import { hasSpecialCharacters } from "@/utils/hasSpecialCharacter";

const Username: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile, error } = useAppSelect((state) => state.edit_profile);

	const onChangeUserName = useCallback(
		(text: string) => {
			dispatch(setEditProfile({ ...profile, username: text }));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[dispatch, profile.username]
	);

	const checkForSpcialCharacters = useCallback(() => {
		if (hasSpecialCharacters(profile.username)) {
			dispatch(setError("No special character allowed!"));
		} else {
			dispatch(setError(""));
		}
	}, [profile.username, dispatch]);

	useEffect(() => {
		checkForSpcialCharacters();
	}, [checkForSpcialCharacters]);

	return (
		<EditProfileInput label={<Label text="Username" />}>
			<TextField
				error={!!error}
				helperText={error}
				value={profile.username || ""}
				onChange={(e) => onChangeUserName(e.target.value)}
				placeholder="username"
				size="small"
				required
			/>
		</EditProfileInput>
	);
};

export default Username;
