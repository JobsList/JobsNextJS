import { ProfilePage } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import session from "@/lib/session";
import { User } from "@/types/User";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

export const getServerSideProps = async (ctx: any) => {
	const user = await session(ctx);

	if (!user) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return {
		props: {
			title: `${user.user?.name} | Job Search App`,
			user,
		},
	};
};

type UserProfileProps = {
	title: string;
	user: User;
};

const UserProfile: NextPage<UserProfileProps> = ({ title, user }) => {
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			<ProfilePage user={user} />
		</React.Fragment>
	);
};

(UserProfile as PageWithLayoutType).layout = BaseLayout;

export default UserProfile;
