import { CreateJobPostPage } from "@/features";
import session from "@/lib/session";
import { NextPage } from "next";
import React from "react";

export const getServerSideProps = async (ctx: any) => {
	const userSession = await session(ctx);

	if (!userSession) {
		return {
			redirect: {
				destination: "/login",
				permanent: false,
			},
		};
	}

	return {
		props: {
			user: userSession,
		},
	};
};

const CreateJob: NextPage = () => {
	return <CreateJobPostPage />;
};

export default CreateJob;
