import { Button, Stack } from "@mui/material";
import React from "react";
import EditProfileInput from "./EditProfileInput";
import Label from "./Label";

const FluentIn: React.FC = () => {
	return (
		<EditProfileInput label={<Label text="Fluent in" />}>
			<Stack direction="row" spacing={5} component="div">
				<Button size="small">English</Button>
				<Button size="small">Urdu</Button>
			</Stack>
		</EditProfileInput>
	);
};

export default FluentIn;
