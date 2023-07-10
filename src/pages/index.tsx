import React from "react";
import Head from "next/head";
import { NextPage } from "next";

import { Home } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import session from "@/lib/session";
import { User } from "@/types/User";
import { Box } from "@mui/material";

// NOTE: this is server side generated page along with meta tags,
// getServerSideProps will run on the server, we can add api call here as well.
export const getServerSideProps = async (ctx: any) => {
	const user = await session(ctx);

	return {
		props: {
			title: "Job Search App",
			user,
		},
	};
};

type HomePageProps = {
	title: string;
	user: User;
};

const HomePage: NextPage<HomePageProps> = (props) => {
	return (
		<Box component="div">
			<Head>
				<title>{props.title}</title>
				<meta name="description" content="this is home page of job search" />
			</Head>
			<Home user={props.user} />
		</Box>
	);
};

(HomePage as PageWithLayoutType).layout = BaseLayout;

export default HomePage;
