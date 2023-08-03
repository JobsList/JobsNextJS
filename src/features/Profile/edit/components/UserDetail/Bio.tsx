import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Bio: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(bio: string) => dispatch(setEditProfile({ ...profile, bio })),
		[profile, dispatch]
	);

	return (
		<EditProfileInput label={<Label text="Bio" />}>
			<TextField
				multiline
				minRows={6}
				placeholder="Write a bio about yourself."
				sx={{ width: "50%" }}
				value={profile.bio}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default Bio;
