import { User } from "@/types/User";
import { Box, Stack } from "@mui/material";
import React from "react";
import UserDetails from "./components/UserDetails";
import Employment from "./components/Employment";
import Education from "./components/Education";
import PageMainHeader from "@/components/PageMainHeader";
import { Profile } from "./edit/ducks/edit_profile.state";

type ProfilePageProps = {
	user: User;
	profile: Profile;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ user, profile }) => {
	return (
		<Box component="div" mb={20}>
			<Stack>
				<PageMainHeader user={user} />
				<UserDetails profile={profile} user={user} />
				<Employment profile={profile} user={user} />
				<Education profile={profile} user={user} />
			</Stack>
		</Box>
	);
};

export default ProfilePage;
