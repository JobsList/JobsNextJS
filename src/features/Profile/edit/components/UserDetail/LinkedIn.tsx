import React, { useCallback } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const LinkedIn: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(linkedIn: string) => dispatch(setEditProfile({ ...profile, linkedIn })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<LinkedInIcon
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
									color: "#03A9F4",
								}}
							/>
							LinkedIn
						</span>
					}
				/>
			}
		>
			<TextField
				size="small"
				type="text"
				placeholder="LinkedIn username"
				value={profile.linkedIn}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default LinkedIn;
