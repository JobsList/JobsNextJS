import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";

import countriesList from "@/utils/countryList.json";
import SubText from "./SubText";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Residency: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChangeResidency = useCallback(
		(residency: string) => dispatch(setEditProfile({ ...profile, residency })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={<Label text="Residency country" />}
			subText={
				<SubText
					text={`What's your current legal country of residence? This is the country
				you're legally registered as a resident at the city or country
				government. If you don't have one now, use your last known. This is
				important for employers.`}
				/>
			}
		>
			<Select
				value={profile.residency}
				size="small"
				IconComponent={() => <></>}
				sx={{ width: "40%" }}
				onChange={(e) => onChangeResidency(e.target.value)}
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

export default Residency;
