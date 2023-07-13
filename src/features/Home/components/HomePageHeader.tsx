import React from "react";
import { Stack, Typography } from "@mui/material";
import GlobalSearch from "@/components/GlobalSearch";
import Link from "@/components/Link";
import { User } from "@/types/User";
import RenderUserOrLogin from "./RenderUserOrLogin";
import PageMainHeader from "@/components/PageMainHeader";

type HomePageHeaderProps = {
	user: User;
};

const HomePageHeader: React.FC<HomePageHeaderProps> = ({ user }) => {
	return (
		<Stack flex={1} alignItems="center">
			<PageMainHeader user={user} />
			<Typography
				color="extra.white"
				fontSize={28}
				fontWeight={(theme) => theme.typography.fontWeightBold}
			>
				Job Search
			</Typography>
			<Typography
				sx={{
					textShadow: "0px 2px 1px rgba(0, 0, 0, 1)",
				}}
				color="extra.white"
				fontSize={38}
				component="h2"
				mt={10}
			>
				find a remote job
			</Typography>
			<Typography
				sx={{
					textShadow: "0px 2px 1px rgba(0, 0, 0, 1)",
				}}
				color="extra.white"
				fontSize={38}
				component="h2"
			>
				work from anywhere
			</Typography>

			<GlobalSearch />
		</Stack>
	);
};

export default HomePageHeader;
