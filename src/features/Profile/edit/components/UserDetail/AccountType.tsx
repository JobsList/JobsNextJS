/* eslint-disable react/no-unescaped-entities */
import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const AccountType: React.FC = () => {
	const { profile } = useAppSelect((state) => state.edit_profile);
	const dispatch = useAppDispatch();

	const updateAccountType = useCallback(
		(value: string) =>
			dispatch(setEditProfile({ ...profile, account_type: value })),
		[dispatch, profile]
	);

	return (
		<EditProfileInput label={<Label text="Account type" />}>
			<Select
				value={profile.account_type}
				size="small"
				IconComponent={() => <></>}
				onChange={(e) => updateAccountType(e.target.value)}
			>
				<MenuItem value="worker">I'm a remote worker</MenuItem>
				<MenuItem value="hiring">I'm hiring remote workers</MenuItem>
			</Select>
		</EditProfileInput>
	);
};

export default AccountType;
