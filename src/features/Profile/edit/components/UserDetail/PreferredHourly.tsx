import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const PreferredHourly: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(hourly_rate: number) =>
			dispatch(
				setEditProfile({
					...profile,
					hourly_rate,
				})
			),
		[profile, dispatch]
	);

	return (
		<EditProfileInput label={<Label text="Your preferred hourly pay (min)" />}>
			<TextField
				size="small"
				type="number"
				InputProps={{
					startAdornment: "US$ ",
					endAdornment: "/hour",
				}}
				value={profile.hourly_rate}
				onChange={(e) => onChange(+e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default PreferredHourly;
