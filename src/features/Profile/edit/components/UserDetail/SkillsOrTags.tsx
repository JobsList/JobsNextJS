import React from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { TextField } from "@mui/material";
import SubText from "./SubText";

const SkillsOrTags: React.FC = () => {
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
			/>
		</EditProfileInput>
	);
};

export default SkillsOrTags;
