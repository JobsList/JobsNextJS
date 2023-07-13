import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";

const Github: React.FC = () => {
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<GitHubIcon
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
								}}
							/>
							Github
						</span>
					}
				/>
			}
		>
			<TextField size="small" type="text" placeholder="Github username" />
		</EditProfileInput>
	);
};

export default Github;
