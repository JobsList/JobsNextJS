import useAuth from "@/hooks/useAuth";
import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar: React.FC = () => {
	const { user } = useAuth();

	if (!user) {
		return <></>;
	}

	return (
		<Avatar src={user.user?.image || ""}>
			{user.user?.name?.substring(0, 1)}
		</Avatar>
	);
};

export default UserAvatar;
