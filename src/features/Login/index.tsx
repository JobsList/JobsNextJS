import React from "react";
import { Box } from "@mui/material";
import { signIn } from "next-auth/react";

import Image from "@/components/Image";
import Button from "@/components/Button";

const LoginPage: React.FC = () => {
	return (
		<Box component="div" sx={{ position: "relative" }}>
			<Image
				sx={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0 }}
				src="/images/header.jpg"
				alt="job-search-login-bg"
			/>

			{/**
			 * Will add google login here once other pages are completed!
			 */}

			<Button variant="contained" onClick={() => signIn("google")}>
				Login With Google
			</Button>
		</Box>
	);
};

export default LoginPage;
