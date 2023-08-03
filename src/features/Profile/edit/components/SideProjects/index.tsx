/* eslint-disable react/no-unescaped-entities */
import {
	Card,
	CardContent,
	CardHeader,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import SideProject from "./SideProject";
import { User } from "@/types/User";
import { Profile } from "../../ducks/edit_profile.state";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { createOrUpdateSideProjects } from "../../ducks/sideProjects/sideProjects.actions";
import Button from "@/components/Button";

type Props = {
	profile: Profile;
};

const SideProjects: React.FC<Props> = ({ profile }) => {
	const { user } = useAuth();
	const dispatch = useAppDispatch();
	const { loading } = useAppSelect((state) => state.side_projects);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(createOrUpdateSideProjects(user));
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
					title={<Typography variant="h6">Side Projects</Typography>}
				/>
				<CardContent>
					<Typography>
						Please only write years, not months! You can add your (side)
						projects and portfolio items here. Leave year end empty if you still
						work on it (it'll show as Now). To remove something, make the
						textboxes empty (for now).
					</Typography>

					<SideProject profile={profile} />

					<Stack mt={10}>
						<Button disabled={loading} type="submit" variant="contained">
							{loading ? "Loading..." : "Save Changes"}
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</form>
	);
};

export default SideProjects;
