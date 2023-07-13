import React from "react";
import EditProfileInput from "./EditProfileInput";
import { TextField } from "@mui/material";
import Label from "./Label";
import NomadListSvg from "@/icons/NomadListSvg";

const NomadList: React.FC = () => {
	return (
		<EditProfileInput
			label={
				<Label
					text={
						<span style={{ display: "flex", alignItems: "center" }}>
							<NomadListSvg
								sx={{
									marginRight: (theme) => theme.spacing(1),
									fontSize: (theme) => theme.typography.fontSize * 1.2,
								}}
							/>
							NomadList
						</span>
					}
				/>
			}
		>
			<TextField size="small" type="text" placeholder="NomadList username" />
		</EditProfileInput>
	);
};

export default NomadList;
