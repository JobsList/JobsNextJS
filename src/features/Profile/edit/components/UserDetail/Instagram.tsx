import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import InstagramSvg from "@/icons/InstagramSvg";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Instagram: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(insta: string) => dispatch(setEditProfile({ ...profile, insta })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<InstagramSvg
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
									color: "#03A9F4",
								}}
							/>
							Instagram
						</span>
					}
				/>
			}
		>
			<TextField
				size="small"
				type="text"
				placeholder="Instagram username"
				value={profile.insta}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default Instagram;
