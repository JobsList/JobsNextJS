import React from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";

import countriesList from "@/utils/countryList.json";
import SubText from "./SubText";
import Label from "./Label";

const Nationality: React.FC = () => {
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

export default Nationality;
