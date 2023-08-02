import { EditProfilePage, editProfileServerSideProps } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPage } from "next";
import React from "react";

type Props = {
	user: any;
};

const UserProfileEdit: NextPage<Props> = (props) => {
	return <EditProfilePage user={props.user} />;
};

(UserProfileEdit as PageWithLayoutType).layout = BaseLayout;

export const getServerSideProps = editProfileServerSideProps;

export default UserProfileEdit;
