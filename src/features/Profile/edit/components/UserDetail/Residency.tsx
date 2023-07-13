import React from "react";
import EditProfileInput from "./EditProfileInput";
import { MenuItem, Select } from "@mui/material";

import countriesList from "@/utils/countryList.json";
import SubText from "./SubText";
import Label from "./Label";

const Residency: React.FC = () => {
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

export default Residency;
