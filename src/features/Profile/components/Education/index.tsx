import { User } from "@/types/User";
import {
	Card,
	CardContent,
	CardHeader,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { Profile } from "../../edit/ducks/edit_profile.state";
import Link from "@/components/Link";
import dayjs from "dayjs";

type Props = {
	user: User;
	profile: Profile;
};

const Education: React.FC<Props> = ({ user, profile }) => {
	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(15),
				padding: (theme) => theme.spacing(0, 15),
			}}
		>
			<CardHeader title={<Typography variant="h6">Education</Typography>} />
			<CardContent>
				{profile && profile.education ? (
					profile.education?.map?.((edu) => (
						<Stack
							divider={<Divider />}
							key={edu.school}
							component="div"
							direction="row"
							spacing={1}
							sx={{
								borderBottom: "1px solid #eee",
								padding: (theme) => theme.spacing(10, 0),
							}}
						>
							<Stack direction="row">
								<Typography>
									{dayjs(edu.start_date).year().toString()}
								</Typography>{" "}
								&nbsp; to &nbsp;
								<Typography>
									{edu.end_date
										? dayjs(edu.end_date).year().toString() + ":"
										: "Now: "}
								</Typography>
							</Stack>
							<Typography>{edu.title}</Typography> @
							<Typography
								fontWeight={(theme) => theme.typography.fontWeightBold}
							>
								<Link href={edu.link || "/"}>{edu.school}</Link>
							</Typography>
						</Stack>
					))
				) : (
					<Typography>No Employment info.</Typography>
				)}
			</CardContent>
		</Card>
	);
};

export default Education;
