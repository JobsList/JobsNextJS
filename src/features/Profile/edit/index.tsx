import { Card, CardContent, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import EditProfilePageHeader from "./components/EditProfilePageHeader";
import Username from "./components/Username";
import AccountType from "./components/AccountType";
import UploadProfileImage from "./components/UploadProfileImage";
import Location from "./components/Location";
import Residency from "./components/Residency";
import Nationality from "./components/Nationality";
import EmailInput from "./components/EmailInput";
import EmailNotifications from "./components/EmailNotifications";
import Gender from "./components/Gender";
import Website from "./components/Website";
import Telegram from "./components/Telegram";
import Github from "./components/Github";

const EditProfilePage: React.FC = () => {
	return (
		<React.Fragment>
			<Stack>
				<EditProfilePageHeader />

				<Card
					sx={{
						marginTop: (theme) => theme.spacing(20),
						padding: (theme) => theme.spacing(0, 20),
						marginBottom: (theme) => theme.spacing(20),
					}}
				>
					<CardContent>
						<Stack spacing={10}>
							<Username />
							<Divider flexItem />
							<AccountType />
							<Divider flexItem />
							<UploadProfileImage />
							<Divider flexItem />
							<Location />
							<Divider flexItem />
							<Residency />
							<Divider flexItem />
							<Nationality />
							<Divider flexItem />
							<EmailInput />
							<Divider flexItem />
							<EmailNotifications />
							<Divider flexItem />
							<Gender />
							<Divider flexItem />
							<Website />
							<Divider flexItem />
							<Telegram />
							<Divider flexItem />
							<Github />
						</Stack>
					</CardContent>
				</Card>
			</Stack>
		</React.Fragment>
	);
};

export default EditProfilePage;
