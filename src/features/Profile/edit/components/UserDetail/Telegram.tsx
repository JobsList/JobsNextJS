import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";

const Telegram: React.FC = () => {
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<TelegramIcon
								sx={{
									color: "#36A0F1",
									marginRight: (theme) => theme.spacing(1),
								}}
								fontSize="small"
							/>
							Telegram
						</span>
					}
				/>
			}
		>
			<TextField size="small" type="text" placeholder="Telegram username" />
		</EditProfileInput>
	);
};

export default Telegram;
