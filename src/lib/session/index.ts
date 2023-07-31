import { getSession } from "next-auth/react";

const session = async (ctx: any) => {
	const data = await getSession(ctx);

	return data;
};

export default session;
