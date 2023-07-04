import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { AppContext } from "next/app";

// This function will do the redirect if the user is not logged-in.
// otherwise we will get user details.
const session = async (ctx: any) => {
	const data = await getSession(ctx);

	// if (!data) {
	// 	return {
	// 		redirect: {
	// 			destination: "/login",
	// 			permanent: false,
	// 		},
	// 	};
	// }

	// return {
	// 	props: {
	// 		user: data,
	// 	},
	// };

	return data;
};

export default session;
