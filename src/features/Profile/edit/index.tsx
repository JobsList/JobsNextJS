import { Stack } from "@mui/material";
import React from "react";
import EditProfilePageHeader from "./components/EditProfilePageHeader";
import UserDetail from "./components/UserDetail";
import Employment from "./components/Employment";

const EditProfilePage: React.FC = () => {
	return (
		<React.Fragment>
			<Stack mb={15}>
				<EditProfilePageHeader />

				<UserDetail />
				<Employment />
			</Stack>
		</React.Fragment>
	);
};

export default EditProfilePage;
