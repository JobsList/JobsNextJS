import React from "react";
import Head from "next/head";
import { NextPage, NextPageContext } from "next";

import { Home } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import session from "@/lib/session";
import { User } from "@/types/User";
import httpClient from "@/lib/config/http";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

// NOTE: this is server side generated page along with meta tags,
// getServerSideProps will run on the server, we can add api call here as well.
export const getServerSideProps = async (ctx: NextPageContext) => {
	// ctx.res?.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate=60");

	const { limit = 20, offset = 0, search_value, min_per_year = "" } = ctx.query;

	const user: any = await session(ctx);

	let userData = { ...user };

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
			userData = {
				...user,
				user: {
					...user?.user,
					profile: {
						...user?.user?.profile,
						photo: response?.data?.photo,
					},
				},
			};
			// return {
			// 	props: {
			// 		tile: "Job List App",
			// 		user: {
			// 			...user,
			// 			user: {
			// 				...user?.user,
			// 				profile: {
			// 					...user?.user?.profile,
			// 					photo: response?.data?.photo,
			// 					username: response?.data?.username,
			// 				},
			// 			},
			// 		},
			// 	},
			// };
		}
	}

	let minPerYear = parseInt(min_per_year?.toString?.())?.toLocaleString?.(
		"en-US"
	);

	// fetch job posts
	const { response, error } = await httpClient({
		method: "GET",
		path: {
			url: "GET_JOBST_LIST",
		},
		query: {
			limit,
			offset,
			search_value,
			min_per_year: minPerYear,
		},
	});

	return {
		props: {
			title: "Job List App",
			user: userData,
			jobs: response?.data || [],
		},
	};
};

type HomePageProps = {
	title: string;
	user: User;
	jobs: Array<JOB_POST_PAYLOAD>;
};

const HomePage: NextPage<HomePageProps> = (props) => {
	return (
		<React.Fragment>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content="this is home page of job search" />
			</Head>
			<Home jobs={props.jobs} user={props.user} />
		</React.Fragment>
	);
};

(HomePage as PageWithLayoutType).layout = BaseLayout;

export default HomePage;
