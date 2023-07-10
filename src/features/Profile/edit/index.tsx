import { Card, CardContent, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import EditProfilePageHeader from "./components/EditProfilePageHeader";
import Username from "./components/Username";
import AccountType from "./components/AccountType";
import UploadProfileImage from "./components/UploadProfileImage";

const EditProfilePage: React.FC = () => {
	return (
		<React.Fragment>
			<Stack>
				<EditProfilePageHeader />

				<Card sx={{ marginTop: (theme) => theme.spacing(20) }}>
					<CardContent>
						<Stack spacing={10}>
							<Username />
							<Divider flexItem />
							<AccountType />
							<Divider flexItem />
							<UploadProfileImage />
						</Stack>
					</CardContent>
				</Card>
			</Stack>
		</React.Fragment>
	);
};

export default EditProfilePage;
