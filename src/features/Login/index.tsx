import Image from "@/components/Image";
import { Box, Grid } from "@mui/material";

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
		</Box>
	);
};

export default LoginPage;
