import React, { useRef } from "react";
import EditProfileInput from "./EditProfileInput";
import { Box, Stack, TextField, styled } from "@mui/material";

const Image = styled("img")(({ theme }) => ({
	width: "100%",
	height: "100%",
	objectFit: "cover",
}));

const UploadProfileImage: React.FC = () => {
	const ref = useRef<HTMLInputElement>(null);
	return (
		<EditProfileInput label="Profile Photo">
			<Box>
				<Box
					component="div"
					sx={{
						border: "1px solid",
						borderColor: "extra.grey",
						height: "210px",
						borderRadius: (theme) => theme.shape.borderRadius / 7,
						width: "70%",
						overflow: "hidden",
						"&:hover": {
							cursor: "pointer",
							opacity: 0.7,
						},
						padding: 0,
					}}
					mb={5}
				>
					<Image src="/images/user.jpeg" alt="user-profile-image" />
				</Box>
				<TextField ref={ref} type="file" size="small" sx={{ width: "70%" }} />
			</Box>
		</EditProfileInput>
	);
};

export default UploadProfileImage;
