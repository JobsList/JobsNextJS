import React, { useCallback } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Telegram: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(telegram: string) => dispatch(setEditProfile({ ...profile, telegram })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<TelegramIcon
								sx={{
									color: "#36A0F1",
									marginRight: (theme) => theme.spacing(1),
								}}
								fontSize="small"
							/>
							Telegram
						</span>
					}
				/>
			}
		>
			<TextField
				size="small"
				type="text"
				placeholder="Telegram username"
				value={profile.telegram}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default Telegram;
