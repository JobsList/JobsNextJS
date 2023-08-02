/* eslint-disable react/no-unescaped-entities */
import {
	Card,
	CardContent,
	CardHeader,
	Stack,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import Education from "./Education";
import Button from "@/components/Button";
import { User } from "@/types/User";
import { Profile } from "../../ducks/edit_profile.state";
import { useAppDispatch } from "@/hooks/useRedux";
import { createOrUpdateEducation } from "../../ducks/educations/educations.actions";
import useAuth from "@/hooks/useAuth";

type Props = {
	profile: Profile;
};

const Educations: React.FC<Props> = ({ profile }) => {
	const { user } = useAuth();
	const dispatch = useAppDispatch();
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(createOrUpdateEducation(user));
	};
	return (
		<form onSubmit={onSubmit}>
			<Card
				sx={{
					marginTop: (theme) => theme.spacing(20),
					padding: (theme) => theme.spacing(0, 20),
				}}
			>
				<CardHeader
					title={<Typography variant="h6">Educations</Typography>}
				></CardHeader>
				<CardContent>
					<Typography>
						Please only write years, not months! Leave year end empty if you
						still study there (it'll show as Now). To remove something, make the
						textboxes empty (for now).
					</Typography>

					<Education user={user} profile={profile} />

					<Stack mt={10}>
						<Button type="submit" variant="contained">
							Save Changes
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</form>
	);
};

export default Educations;
