import { Button, Stack } from "@mui/material";
import React from "react";
import EditProfilePageHeader from "./components/EditProfilePageHeader";
import UserDetail from "./components/UserDetail";
import Employment from "./components/Employment";
import SideProjects from "./components/SideProjects";
import Educations from "./components/Education";
import { NextPageContext } from "next";
import session from "@/lib/session";
import { User } from "@/types/User";

export const serverSideProps = async (ctx: NextPageContext) => {
	// Here we will add logic for getting profile data from the api.
	// NOTE: By using getServerSideProps function, we will generate This page on the server.
	// So if we don't get user profile details, then we will keep the form empty.

	const userSession = await session(ctx);

	if (!userSession) {
		return {
			redirect: {
				destination: "/login",
				permanent: true,
			},
		};
	}

	return {
		props: {
			user: userSession,
		},
	};
};

type Props = {
	user: any;
};

const EditProfilePage: React.FC<Props> = (props) => {
	const { user } = props;
	return (
		<React.Fragment>
			<Stack mb={15}>
				<EditProfilePageHeader />

				<UserDetail user={user} />
				<Employment />
				<SideProjects />
				<Educations />
			</Stack>
		</React.Fragment>
	);
};

export default EditProfilePage;
