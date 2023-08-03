import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const LanguageInput: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(languages: string) =>
			dispatch(
				setEditProfile({ ...profile, languages: languages.split?.(",") })
			),
		[profile, dispatch]
	);

	return (
		<EditProfileInput
			label={
				<Label text="Spoken languages you're fluent in (comma seperated)" />
			}
		>
			<TextField
				size="small"
				placeholder="Languages (comma separated)"
				value={profile.languages}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default LanguageInput;
