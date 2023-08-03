import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";

import countriesList from "@/utils/countryList.json";
import SubText from "./SubText";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Location: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChangeLocation = useCallback(
		(location: string) => dispatch(setEditProfile({ ...profile, location })),
		[profile, dispatch]
	);

	return (
		<EditProfileInput
			label={<Label text="Location" />}
			subText={
				<SubText
					text={`In which country are you staying now? This helps us connect you to
				other remote workers there.`}
				/>
			}
		>
			<Select
				value={profile.location}
				size="small"
				IconComponent={() => <></>}
				sx={{ width: "40%" }}
				onChange={(e) => onChangeLocation(e.target.value)}
			>
				{countriesList.slice(1, countriesList.length - 1).map((c) => (
					<MenuItem key={c.name} value={c.name}>
						{c.emoji} {c.name}
					</MenuItem>
				))}
			</Select>
		</EditProfileInput>
	);
};

export default Location;
