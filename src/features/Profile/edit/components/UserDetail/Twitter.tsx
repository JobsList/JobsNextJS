import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";

const Twitter: React.FC = () => {
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<TwitterIcon
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
									color: "#03A9F4",
								}}
							/>
							Twitter
						</span>
					}
				/>
			}
		>
			<TextField size="small" type="text" placeholder="Twitter username" />
		</EditProfileInput>
	);
};

export default Twitter;
