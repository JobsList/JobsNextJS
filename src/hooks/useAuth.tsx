import { useSession } from "next-auth/react";

const useAuth = () => {
	const { data } = useSession();

	if (!data) {
		return {
			user: null,
		};
	}

	return {
		user: data,
	};
};

export default useAuth;
