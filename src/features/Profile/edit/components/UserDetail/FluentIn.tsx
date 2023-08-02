import { Button, Stack } from "@mui/material";
import React from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";
import { useAppSelect } from "@/hooks/useRedux";

const FluentIn: React.FC = () => {
	const { profile } = useAppSelect((state) => state.edit_profile);

	return (
		<EditProfileInput label={<Label text="Fluent in" />}>
			<Stack direction="row" spacing={5} component="div">
				{profile.languages.map((l) => (
					<Button size="small" key={l}>
						{l}
					</Button>
				))}
			</Stack>
		</EditProfileInput>
	);
};

export default FluentIn;
