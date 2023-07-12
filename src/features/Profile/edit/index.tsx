import { Button, Stack } from "@mui/material";
import React from "react";
import EditProfilePageHeader from "./components/EditProfilePageHeader";
import UserDetail from "./components/UserDetail";
import Employment from "./components/Employment";
import SideProjects from "./components/SideProjects";
import Educations from "./components/Education";

const EditProfilePage: React.FC = () => {
	return (
		<React.Fragment>
			<Stack mb={15}>
				<EditProfilePageHeader />

				<UserDetail />
				<Employment />
				<SideProjects />
				<Educations />

				<Button
					sx={{ marginTop: (theme) => theme.spacing(10) }}
					fullWidth
					variant="contained"
					size="large"
				>
					Save changes
				</Button>
			</Stack>
		</React.Fragment>
	);
};

export default EditProfilePage;
