import React from "react";
import { NextPage } from "next";

import LoginPage from "@/features/Login";
import session from "@/lib/session";

export const getServerSideProps = async (ctx: any) => {
	const userSession = await session(ctx);

	if (userSession) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};

const Login: NextPage = () => {
	return <LoginPage />;
};

export default Login;
