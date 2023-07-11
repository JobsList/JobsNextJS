import React from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";

import countriesList from "@/utils/countryList.json";
import SubText from "./SubText";
import Label from "./Label";

const Location: React.FC = () => {
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
				value=""
				size="small"
				IconComponent={() => <></>}
				sx={{ width: "40%" }}
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
