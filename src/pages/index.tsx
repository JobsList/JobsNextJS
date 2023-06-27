import React from "react";
import { Home } from "@/features";
import PageWithLayoutType from "@/layouts";
import BaseLayout from "@/layouts/BaseLayout";
import Head from "next/head";
import { AppContext } from "next/app";

// NOTE: this is server side generated page along with meta tags,
// getServerSideProps will run on the server, we can add api call here as well.
export const getServerSideProps = async ({ ctx }: AppContext) => {
	return {
		props: {
			title: "Hello Home Page",
		},
	};
};

type HomePageProps = {
	title: string;
};

const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<meta name="description" content="this is home page of job search" />
			</Head>
			<Home />
		</div>
	);
};

(HomePage as PageWithLayoutType).layout = BaseLayout;

export default HomePage;
