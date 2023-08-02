import {
	Card,
	CardActionArea,
	CardContent,
	Divider,
	Stack,
} from "@mui/material";
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
import Instagram from "./Instagram";
import Bio from "./Bio";
import SkillsOrTags from "./SkillsOrTags";
import FluentIn from "./FluentIn";
import LanguageInput from "./LanguageInput";
import AvailableToWork from "./AvailableToWork";
import PreferredTimeZone from "./PreferredTimeZone";

import PreferredPerYear from "./PreferredPerYear";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { createEditProfile } from "../../ducks/edit_profile.actions";
import Error from "next/error";

type Props = {
	user: any;
};

const UserDetail: React.FC<Props> = ({ user }) => {
	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelect((state) => state.edit_profile);

	const onSave = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(createEditProfile(user));
	};

	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(20),
				padding: (theme) => theme.spacing(0, 20),
			}}
		>
			<form onSubmit={onSave}>
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
					<Stack mb={10} mt={5}>
						<Button disabled={loading} variant="contained" type="submit">
							{loading ? "Loading..." : "Save Changes"}
						</Button>

						{error && (
							<Error title="Error" statusCode={300}>
								{error}
							</Error>
						)}
					</Stack>
				</CardContent>
			</form>
		</Card>
	);
};

export default UserDetail;
