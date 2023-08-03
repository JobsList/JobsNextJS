import React, { useCallback } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const Github: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(github: string) => dispatch(setEditProfile({ ...profile, github })),
		[profile, dispatch]
	);
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<GitHubIcon
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
								}}
							/>
							Github
						</span>
					}
				/>
			}
		>
			<TextField
				size="small"
				type="text"
				placeholder="Github username"
				value={profile.github}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default Github;
