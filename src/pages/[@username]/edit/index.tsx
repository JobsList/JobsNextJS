import { EditProfilePage, editProfileServerSideProps } from "@/features";
import { Profile } from "@/features/Profile/edit/ducks/edit_profile.state";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPage } from "next";
import React from "react";

type Props = {
	user: any;
	profile: Profile;
};

const UserProfileEdit: NextPage<Props> = (props) => {
	return <EditProfilePage user={props.user} profile={props.profile} />;
};

(UserProfileEdit as PageWithLayoutType).layout = BaseLayout;

export const getServerSideProps = editProfileServerSideProps;

export default UserProfileEdit;
