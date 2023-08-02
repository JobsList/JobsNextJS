import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import EditProfilePageHeader from "./components/EditProfilePageHeader";
import UserDetail from "./components/UserDetail";
import Employment from "./components/Employment";
import SideProjects from "./components/SideProjects";
import Educations from "./components/Education";
import { NextPageContext } from "next";
import session from "@/lib/session";
import { User } from "@/types/User";
import httpClient from "@/lib/config/http";
import { Profile } from "./ducks/edit_profile.state";
import { useAppDispatch } from "@/hooks/useRedux";
import { setEditProfile } from "./ducks/edit_profile.reducer";

export const serverSideProps = async (ctx: NextPageContext) => {
	// Here we will add logic for getting profile data from the api.
	// NOTE: By using getServerSideProps function, we will generate This page on the server.
	// So if we don't get user profile details, then we will keep the form empty.

	const userSession: any = await session(ctx);

	if (!userSession) {
		return {
			redirect: {
				destination: "/login",
				permanent: true,
			},
		};
	}

	// get user profile
	const { response, error } = await httpClient({
		method: "GET",
		path: {
			url: "GET_PROFILE",
			params: {
				id: userSession.user?.id,
			},
		},
		token: userSession.accessToken,
	});

	return {
		props: {
			user: userSession,
			profile: response?.data || null,
		},
	};
};

type Props = {
	user: any;
	profile: Profile;
};

const EditProfilePage: React.FC<Props> = (props) => {
	const { user, profile } = props;
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!profile) {
			return;
		}

		dispatch(setEditProfile({ ...profile }));
	}, [dispatch, profile]);

	return (
		<React.Fragment>
			<Stack mb={15}>
				<EditProfilePageHeader />

				<UserDetail user={user} />
				<Employment user={user} profile={profile} />
				<SideProjects user={user} profile={profile} />
				<Educations profile={profile} />
			</Stack>
		</React.Fragment>
	);
};

export default EditProfilePage;
