import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";

import countriesList from "@/utils/countryList.json";
import SubText from "./SubText";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Nationality: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChangeNationality = useCallback(
		(nationality: string) =>
			dispatch(setEditProfile({ ...profile, nationality })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={<Label text="Nationality" />}
			subText={
				<SubText
					text={`What's the country in your passport? If you have multiple, use the
				primary. This is important for employers.`}
				/>
			}
		>
			<Select
				value={profile.nationality}
				size="small"
				IconComponent={() => <></>}
				sx={{ width: "40%" }}
				onChange={(e) => onChangeNationality(e.target.value)}
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

export default Nationality;
