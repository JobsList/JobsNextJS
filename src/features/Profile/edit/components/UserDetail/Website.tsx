import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Website: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(website: string) => dispatch(setEditProfile({ ...profile, website })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput label={<Label text="🔗 Website" />}>
			<TextField
				size="small"
				type="url"
				placeholder="website URL"
				value={profile.website}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default Website;
