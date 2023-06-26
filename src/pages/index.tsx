import React from "react";
import { Home } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import Head from "next/head";
import { AppContext } from "next/app";
import httpClient from "@/config/http";

// NOTE: this is server side generated page along with meta tags,
// getServerSideProps will run on the server, we can add api call here as well.
export const getServerSideProps = async ({ ctx }: AppContext) => {
	const { response, error } = await httpClient({
		extraBaseUrl: "https://dummyjson.com",
		method: "get",
		path: {
			url: "DUMMY_PRODUCTS",
		},
	});

	return {
		props: {
			title: "Hello Home Page",
			data: response?.data,
		},
	};
};

type HomePageProps = {
	title: string;
	data: Array<any>;
};

const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content="this is home page of job search" />
			</Head>
			<Home data={props.data} />
		</div>
	);
};

(HomePage as PageWithLayoutType).layout = BaseLayout;

export default HomePage;
