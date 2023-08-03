import { ProfilePage } from "@/features";
import { Profile } from "@/features/Profile/edit/ducks/edit_profile.state";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import httpClient from "@/lib/config/http";
import session from "@/lib/session";
import { User } from "@/types/User";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

export const getServerSideProps = async (ctx: any) => {
	const user: any = await session(ctx);

	if (!user) {
		return {
			redirect: {
				destination: "/login",
				permanent: true,
			},
		};
	}

	// get profile data
	const { response, error } = await httpClient({
		method: "GET",
		path: {
			url: "GET_PROFILE",
			params: {
				id: user?.user?.id,
			},
		},
		token: user.accessToken,
	});

	return {
		props: {
			title: `${user.user?.profile?.username} | Job Search App`,
			user,
			profile: response?.data || null,
		},
	};
};

type UserProfileProps = {
	title: string;
	user: User;
	profile: Profile;
};

const UserProfile: NextPage<UserProfileProps> = ({ title, user, profile }) => {
	return (
		<React.Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			<ProfilePage profile={profile} user={user} />
		</React.Fragment>
	);
};

(UserProfile as PageWithLayoutType).layout = BaseLayout;

export default UserProfile;
