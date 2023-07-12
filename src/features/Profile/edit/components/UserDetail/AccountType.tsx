/* eslint-disable react/no-unescaped-entities */
import React from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";
import Label from "./Label";

const AccountType: React.FC = () => {
	return (
		<EditProfileInput label={<Label text="Account type" />}>
			<Select value="worker" size="small" IconComponent={() => <></>}>
				<MenuItem value="worker">I'm a remote worker</MenuItem>
				<MenuItem value="hiring">I'm hiring remote workers</MenuItem>
			</Select>
		</EditProfileInput>
	);
};

export default AccountType;
