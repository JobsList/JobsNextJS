import { User } from "@/types/User";
import { Box, Stack } from "@mui/material";
import React from "react";

type ProfilePageProps = {
	user: User;
};

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
	return (
		<Box component="div">
			<Stack></Stack>
		</Box>
	);
};

export default ProfilePage;
