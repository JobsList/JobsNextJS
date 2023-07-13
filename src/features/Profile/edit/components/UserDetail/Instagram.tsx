import React from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import InstagramSvg from "@/icons/InstagramSvg";

const Instagram: React.FC = () => {
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<InstagramSvg
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
									color: "#03A9F4",
								}}
							/>
							Instagram
						</span>
					}
				/>
			}
		>
			<TextField size="small" type="text" placeholder="Instagram username" />
		</EditProfileInput>
	);
};

export default Instagram;
