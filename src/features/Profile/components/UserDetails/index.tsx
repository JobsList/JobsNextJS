import theme from "@/theme";
import { Avatar, Box, Stack } from "@mui/material";
import React from "react";
import Username from "./Username";
import Experience from "./Experience";
import AboutUser from "./AboutUser";
import UserInfo from "./UserInfo";
import Link from "@/components/Link";
import { User } from "@/types/User";
import { Profile } from "../../edit/ducks/edit_profile.state";

type Props = {
	user: User;
	profile: Profile;
};

const UserDetails: React.FC<Props> = ({ user, profile }) => {
	let profileLink = "";

	if (profile && profile?.username) {
		profileLink = `/@${profile?.username}`;
	} else {
		profileLink = `/@${user?.user?.email}`;
	}

	return (
		<Box
			component="div"
			sx={{
				marginTop: (theme) => theme.spacing(120),
				position: "relative",
			}}
		>
			<Link
				href={`${profileLink}/edit`}
				sx={{
					position: "absolute",
					top: -50,
					right: 0,
					borderBottom: 0,
					backgroundColor: "primary.main",
					padding: (theme) => theme.spacing(5, 10),
					color: "extra.white",
					borderRadius: (theme) => theme.shape.borderRadius / 7,
					boxShadow: "0 2px 1px rgba(0, 0, 0, 0.1)",
				}}
			>
				Edit your profile
			</Link>
			<Box
				component="div"
				sx={{
					backgroundColor: "extra.white",
					border: "1px solid",
					borderColor: "extra.grey",
					borderRadius: (theme) => theme.shape.borderRadius / 7,
					boxShadow: "0 1px 1px rgba(0,0,0,0.1)",
				}}
			>
				<Stack
					sx={{ position: "absolute", width: "100%" }}
					justifyContent="center"
					alignItems="center"
					flexGrow={1}
				>
					<Avatar
						sx={{
							width: 190,
							height: 190,
							top: -85,
							[theme.breakpoints.down("md")]: {
								width: 90,
								height: 90,
								top: -45,
							},
						}}
						src={profile ? profile?.photo : ""}
					>
						Profile Image
					</Avatar>
				</Stack>

				<Box
					component="div"
					sx={{
						padding: (theme) => theme.spacing(10, 25),
						marginTop: (theme) => theme.spacing(45),
					}}
				>
					<Username name={profile ? `@${profile?.username}` : ""} />
					{/* <Experience text="Remote worker with 7+ years of experience - Last seen one day ago " /> */}
					<AboutUser profile={profile} />
					<UserInfo profile={profile} />
				</Box>
			</Box>
		</Box>
	);
};

export default UserDetails;
