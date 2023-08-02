import React, { useCallback } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Twitter: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(twitter: string) => dispatch(setEditProfile({ ...profile, twitter })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<TwitterIcon
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
									color: "#03A9F4",
								}}
							/>
							Twitter
						</span>
					}
				/>
			}
		>
			<TextField
				size="small"
				type="text"
				placeholder="Twitter username"
				value={profile.twitter}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default Twitter;
