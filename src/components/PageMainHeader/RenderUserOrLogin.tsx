import React from "react";
import { User } from "@/types/User";
import Link from "../Link";
import UserAvatar from "../UserAvatar";

type RenderUserOrLoginProps = {
	user: User;
};

const RenderUserOrLogin: React.FC<RenderUserOrLoginProps> = ({ user }) => {
	console.log("user ==> ", user);
	if (user && Object.keys(user).length > 0) {
		return <UserAvatar user={user} />;
	}

	return (
		<Link
			sx={{
				borderWidth: 0,
				backgroundColor: "primary.main",
				color: "extra.white",
				padding: (theme) => theme.spacing(4, 7),
				borderRadius: (theme) => theme.shape.borderRadius / 6,
			}}
			href="/login"
		>
			Login
		</Link>
	);
};

export default RenderUserOrLogin;
