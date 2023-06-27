import { Box, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Image = styled("img")(({ theme }) => ({
	width: "100%",
	objectFit: "cover",
	position: "absolute",
	zIndex: -2,
	aspectRatio: "4.6/1",
	[theme.breakpoints.down("md")]: {
		aspectRatio: "1.3/1",
	},
}));

const PageHeader: React.FC = () => {
	return (
		<Box component="div">
			<Image src="/images/header.jpg" alt="job-search" />
			<Link
				sx={{
					color: (theme) => theme.palette.extra.white,
					position: "absolute",
					right: 5,
				}}
				href="https://www.freepik.com/free-photo/tree-field-with-red-sky-sun-it_41451043.htm#query=nature&position=3&from_view=search&track=ais_ai_generated"
			>
				Image by vecstock on FreePik
			</Link>
		</Box>
	);
};

export default PageHeader;
