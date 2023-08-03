import React from "react";
import Head from "next/head";
import { NextPage } from "next";

import { Home } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import session from "@/lib/session";
import { User } from "@/types/User";
import httpClient from "@/lib/config/http";

// NOTE: this is server side generated page along with meta tags,
// getServerSideProps will run on the server, we can add api call here as well.
export const getServerSideProps = async (ctx: any) => {
	const user: any = await session(ctx);

	if (user) {
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

		if (response?.data) {
			return {
				props: {
					tile: "Job List App",
					user: {
						...user,
						user: {
							...user?.user,
							profile: {
								...user?.user?.profile,
								photo: response?.data?.photo,
								username: response?.data?.username,
							},
						},
					},
				},
			};
		}
	}

	return {
		props: {
			title: "Job List App",
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
		<React.Fragment>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content="this is home page of job search" />
			</Head>
			<Home user={props.user} />
		</React.Fragment>
	);
};

(HomePage as PageWithLayoutType).layout = BaseLayout;

export default HomePage;
