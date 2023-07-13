import Link from "@/components/Link";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const EditProfilePageHeader: React.FC = () => {
	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(130),
				padding: (theme) => theme.spacing(0, 27),
			}}
		>
			<CardContent>
				<Typography textAlign="center">
					👋 Welcome to {process.env.NEXT_PUBLIC_NAME}
				</Typography>

				<Typography textAlign="center" mt={10}>
					You can share your profile with this new short URL on your social
					media and get hired directly:{" "}
					<Link href="/@developer">rok.co/@developer</Link> to advertise
					yourself directly. I will be adding more features every day, so come
					back soon and thanks for being an early adopter of my site!
				</Typography>
			</CardContent>
		</Card>
	);
};

export default EditProfilePageHeader;
