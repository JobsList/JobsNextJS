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
import dayjs from "dayjs";
import Link from "@/components/Link";

type Props = {
	user: User;
	profile: Profile;
};

const Employment: React.FC<Props> = ({ user, profile }) => {
	return (
		<Card
			sx={{
				marginTop: (theme) => theme.spacing(15),
				padding: (theme) => theme.spacing(0, 15),
			}}
		>
			<CardHeader title={<Typography variant="h6">Employment</Typography>} />
			<CardContent>
				{profile && profile.employment ? (
					profile.employment?.map?.((emp) => (
						<Stack
							divider={<Divider />}
							key={emp.company}
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
									{dayjs(emp.start_date).year().toString()}
								</Typography>{" "}
								&nbsp; to &nbsp;
								<Typography>
									{emp.end_date
										? dayjs(emp.end_date).year().toString() + ":"
										: "Now: "}
								</Typography>
							</Stack>
							<Typography>{emp.title}</Typography> @
							<Typography
								fontWeight={(theme) => theme.typography.fontWeightBold}
							>
								<Link href={emp.link || "/"}>{emp.company}</Link>
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

export default Employment;
