import { User } from "@/types/User";
import { Box, Stack } from "@mui/material";
import React from "react";
import UserDetails from "./components/UserDetails";
import Employment from "./components/Employment";
import Education from "./components/Education";
import PageMainHeader from "@/components/PageMainHeader";

type ProfilePageProps = {
	user: User;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
	return (
		<Box component="div" mb={20}>
			<Stack>
				<PageMainHeader user={user} />
				<UserDetails />
				<Employment />
				<Education />
			</Stack>
		</Box>
	);
};

export default ProfilePage;
