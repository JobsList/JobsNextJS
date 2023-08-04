type User = {
	user: {
		id?: number;
		email?: string;
		profile?: {
			username?: string;
			photo?: string;
		};
	};
	accessToken?: string;
};

declare module "next-auth" {
	interface user {
		user: {
			id?: number;
			email?: string;
			profile?: {
				username?: string;
				photo?: string;
			};
		};
		accessToken?: string;
	}
}
