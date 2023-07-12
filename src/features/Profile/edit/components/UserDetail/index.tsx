import { Card, CardContent, Divider, Stack } from "@mui/material";
import React from "react";
import Username from "./Username";
import AccountType from "./AccountType";
import UploadProfileImage from "./UploadProfileImage";
import Location from "./Location";
import Residency from "./Residency";
import Nationality from "./Nationality";
import EmailInput from "./EmailInput";
import EmailNotifications from "./EmailNotifications";
import Gender from "./Gender";
import Website from "./Website";
import Telegram from "./Telegram";
import Github from "./Github";
import PreferredHourly from "./PreferredHourly";
import Twitter from "./Twitter";
import LinkedIn from "./LinkedIn";
import NomadList from "./NomadList";
import Instagram from "./Instagram";
import Bio from "./Bio";
import SkillsOrTags from "./SkillsOrTags";
import FluentIn from "./FluentIn";
import LanguageInput from "./LanguageInput";
import AvailableToWork from "./AvailableToWork";
import PreferredTimeZone from "./PreferredTimeZone";
import PreferredPerYear from "./PreferredPerYear";

const UserDetail = () => {
	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(20),
				padding: (theme) => theme.spacing(0, 20),
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
					<Divider flexItem />
					<Twitter />
					<Divider flexItem />
					<LinkedIn />
					<Divider flexItem />
					<NomadList />
					<Divider flexItem />
					<Instagram />
					<Divider flexItem />
					<Bio />
					<Divider flexItem />
					<SkillsOrTags />
					<Divider flexItem />
					<FluentIn />
					<Divider flexItem />
					<LanguageInput />
					<Divider flexItem />
					<AvailableToWork />
					<Divider flexItem />
					<PreferredTimeZone />
					<Divider flexItem />
					<PreferredPerYear />
					<Divider flexItem />
					<PreferredHourly />
				</Stack>
			</CardContent>
		</Card>
	);
};

export default UserDetail;
