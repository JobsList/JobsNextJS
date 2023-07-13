import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
	secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
	providers: [
		GoogleProvider({
			clientId: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
			clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}`,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	callbacks: {
		async signIn(params) {
			const { profile } = params;
			// since we are only using google login
			// signIn will return true.
			return profile?.email?.endsWith("@gmail.com") || false;
		},
		async jwt({ token, account }) {
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async redirect(params) {
			return params.baseUrl;
		},
		session(params) {
			return params.session;
		},
	},
};

export default NextAuth(authOptions);
