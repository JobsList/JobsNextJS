import CreateJobPost from "@/features/CreateJobPost";
import session from "@/lib/session";
import { AppContext } from "next/app";
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

const CreateJob: React.FC = () => {
	return <CreateJobPost />;
};

export default CreateJob;
