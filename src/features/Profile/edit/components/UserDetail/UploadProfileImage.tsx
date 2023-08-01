"use client";

import React, { useRef } from "react";
import EditProfileInput from "./EditProfileInput";
import { Box, TextField, styled } from "@mui/material";
import Label from "./Label";
import SubText from "./SubText";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setEditProfile } from "../../ducks/edit_profile.reducer";
import getBase64 from "@/utils/getBase64";

const Image = styled("img")(({ theme }) => ({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const UploadProfileImage: React.FC = () => {
	const ref = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const { profile } = useAppSelect((state) => state.edit_profile);

	const onImageClick = () => {
		ref?.current?.click?.();
	};

	const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target?.files?.[0];
		if (!file) return;

		getBase64(file, (base64) => {
			dispatch(setEditProfile({ ...profile, photo: base64 }));
		});
	};

	return (
		<EditProfileInput
			label={<Label text="Profile Photo" />}
			subText={
				<SubText
					text={`Please set a real full-color profile photo (not black and white) of
				just your face. Please smile :)`}
				/>
			}
		>
			<Box component="div">
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
					onClick={onImageClick}
				>
					<Image src={profile.photo} alt="profile image" />
				</Box>
				<TextField
					onChange={onChange}
					type="file"
					size="small"
					sx={{ width: "70%" }}
					inputRef={ref}
					inputProps={{
						accept: ".png, .jpg, .jpeg",
					}}
				/>
			</Box>
		</EditProfileInput>
	);
};

export default UploadProfileImage;
