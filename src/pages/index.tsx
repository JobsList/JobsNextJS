import React from "react";
import { Home } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import Head from "next/head";
import { AppContext } from "next/app";
import session from "@/lib/session";
import { User } from "@/types/User";
import { NextPage } from "next";

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
		<div>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content="this is home page of job search" />
			</Head>
			<Home user={props.user} />
		</div>
	);
};

(HomePage as PageWithLayoutType).layout = BaseLayout;

export default HomePage;
