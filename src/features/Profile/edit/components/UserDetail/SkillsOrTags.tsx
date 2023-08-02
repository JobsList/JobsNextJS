import React, { useCallback } from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";
import SubText from "./SubText";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";

const SkillsOrTags: React.FC = () => {
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onChange = useCallback(
		(skill: string) =>
			dispatch(setEditProfile({ ...profile, skills: skill.split?.(",") })),
		[profile, dispatch]
	);

	return (
		<EditProfileInput
			label={<Label text="Skills/stack tags (comma separated)" />}
			subText={
				<SubText
					text={`Use tags like react, js, html, ux, ui, customer support, marketing, front end, backend, office365, excel etc. The more/better tags you use the more you show up on the site! See the Remote OK jobs pages for example tags in your field to add here.`}
				/>
			}
		>
			<TextField
				multiline
				minRows={4}
				placeholder="Skills/stack tags comma separated."
				sx={{ width: "50%" }}
				value={profile.skills.join(",")}
				onChange={(e) => onChange(e.target.value)}
			/>
		</EditProfileInput>
	);
};

export default SkillsOrTags;
