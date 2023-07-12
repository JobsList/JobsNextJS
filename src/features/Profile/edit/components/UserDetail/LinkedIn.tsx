import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";

const LinkedIn: React.FC = () => {
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<LinkedInIcon
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
									color: "#03A9F4",
								}}
							/>
							LinkedIn
						</span>
					}
				/>
			}
		>
			<TextField size="small" type="text" placeholder="LinkedIn username" />
		</EditProfileInput>
	);
};

export default LinkedIn;
