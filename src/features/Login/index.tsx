import React from "react";
import { Box, Stack } from "@mui/material";
import { signIn } from "next-auth/react";

import Image from "@/components/Image";
import Button from "@/components/Button";
import GoogleSvg from "@/icons/GoogleSvg";

const LoginPage: React.FC = () => {
	return (
		<Box
			component="div"
			sx={{
				position: "relative",
				minHeight: "100vh",
				backgroundColor: "rgba(0, 0, 0, 0.4)",
			}}
		>
			<Image
				sx={{
					position: "absolute",
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
					zIndex: -1,
				}}
				src="/images/header.jpg"
				alt="job-search-login-bg"
			/>

			{/**
			 * Will add google login here once other pages are completed!
			 */}

			<Stack
				flex={1}
				justifyContent="center"
				alignItems="center"
				sx={{ height: "100vh" }}
			>
				<Button
					size="large"
					variant="contained"
					onClick={() => signIn("google")}
				>
					<GoogleSvg sx={{ marginRight: (theme) => theme.spacing(2) }} /> Login
					With Google
				</Button>
			</Stack>
		</Box>
	);
};

export default LoginPage;
