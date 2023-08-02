import React, { useCallback } from "react";
import { Checkbox, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import SubText from "./SubText";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const AvailableToWork: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(available_from: string) =>
			dispatch(setEditProfile({ ...profile, available_from })),
		[profile, dispatch]
	);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<EditProfileInput
				label={<Label text="Available for work" />}
				subText={
					<SubText
						text={`You'll only be able to receive job offers and get contacted if you're set to available.`}
					/>
				}
			>
				<Checkbox
					checked={profile.available}
					onChange={(_, checked) =>
						dispatch(setEditProfile({ ...profile, available: checked }))
					}
				/>{" "}
				<Typography>from</Typography>&nbsp;
				<DatePicker
					value={dayjs(profile.available_from)}
					onChange={(value) => onChange(`${value?.toISOString?.()}`)}
				/>
			</EditProfileInput>
		</LocalizationProvider>
	);
};

export default AvailableToWork;
