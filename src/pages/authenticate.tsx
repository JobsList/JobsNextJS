import React from "react";
import { NextPage, NextPageContext } from "next";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import session from "@/lib/session";
import Loading from "@/components/Loading";

const Authenticate: NextPage = () => {
	return (
		<React.Fragment>
			<Loading visible color="secondary" />
		</React.Fragment>
	);
};

(Authenticate as PageWithLayoutType).layout = BaseLayout;

export const getServerSideProps = async (ctx: NextPageContext) => {
	const userSession = await session(ctx);

	if (!userSession) {
		return {
			redirect: {
				destination: "/login",
				permanent: true,
			},
		};
	}

	// check if the user has profile or not
	if (userSession?.user && !userSession?.user?.profile) {
		return {
			redirect: {
				destination: `/@${userSession.user.email}/edit`,
				permanent: true,
			},
		};
	}

	return {
		props: {},
		redirect: {
			destination: "/",
			permanent: true,
		},
	};
};

export default Authenticate;
