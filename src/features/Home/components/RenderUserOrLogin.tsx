import React from "react";
import Link from "@/components/Link";
import { User } from "@/types/User";
import UserAvatar from "@/components/UserAvatar";

type RenderUserOrLoginProps = {
	user: User;
};

const RenderUserOrLogin: React.FC<RenderUserOrLoginProps> = ({ user }) => {
	console.log("USER ===> ", user);
	if (user) {
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
