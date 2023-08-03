import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";
import SubText from "./SubText";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const PreferredPerYear: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(annual_pay: number) =>
			dispatch(
				setEditProfile({
					...profile,
					annual_pay,
				})
			),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={<Label text="Your preferred annual pay (min)" />}
			subText={
				<SubText
					text={`Only profiles with annual pay set are shown on the frontpage. Please write these as US dollars per year in thousands e.g. write 45 for $45,000/year. If you charge by project/day ur, make an estimate of what you make in a year if it'd be full time and enter that.`}
				/>
			}
		>
			<TextField
				size="small"
				type="number"
				InputProps={{
					startAdornment: "US$ ",
					endAdornment: ",000/year",
				}}
				value={profile.annual_pay}
				onChange={(e) => onChange(+e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default PreferredPerYear;
