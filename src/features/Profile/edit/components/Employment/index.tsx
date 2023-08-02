/* eslint-disable react/no-unescaped-entities */
import {
	Card,
	CardContent,
	CardHeader,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import EmploymentInputs from "./EmploymentInputs";
import { Profile } from "../../ducks/edit_profile.state";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { createOrUpdateEmployment } from "../../ducks/employment/employment.actions";
import Button from "@/components/Button";

type Props = {
	profile: Profile;
};

const Employment: React.FC<Props> = ({ profile }) => {
	const { user } = useAuth();
	const dispatch = useAppDispatch();
	const { loading } = useAppSelect((state) => state.employments);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(createOrUpdateEmployment(user));
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
					title={<Typography variant="h6">Employment</Typography>}
				></CardHeader>
				<CardContent>
					<Typography>
						Please only write years, not months! Leave year end empty if you
						still work there (it'll show as Now). To remove something, make the
						textboxes empty (for now).
					</Typography>

					<EmploymentInputs profile={profile} />

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

export default Employment;
