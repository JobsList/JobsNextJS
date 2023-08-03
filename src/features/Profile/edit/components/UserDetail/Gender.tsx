import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Gender: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(gender: string) => dispatch(setEditProfile({ ...profile, gender })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput label={<Label text="Gender" />}>
			<Select
				value={profile.gender}
				onChange={(e) => onChange(e.target.value)}
				size="small"
				IconComponent={() => <></>}
				sx={{ width: "30%" }}
			>
				<MenuItem value="out-of-range"></MenuItem>
				<MenuItem value="man">Man</MenuItem>
				<MenuItem value="woman">Woman</MenuItem>
				<MenuItem value="other">Other</MenuItem>
			</Select>
		</EditProfileInput>
	);
};

export default Gender;
