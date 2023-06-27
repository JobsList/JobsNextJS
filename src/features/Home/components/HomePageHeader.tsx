import React from "react";
import { Stack, Typography } from "@mui/material";
import GlobalSearch from "@/components/GlobalSearch";
import Link from "@/components/Link";
import theme from "@/theme";

const HomePageHeader = () => {
	return (
		<Stack alignItems="center">
			<Stack flex={1}>
				<Link
					sx={{
						border: 0,
						backgroundColor: "primary.main",
						color: "extra.white",
						padding: (theme) => theme.spacing(4, 7),
						borderRadius: (theme) => theme.shape.borderRadius / 6,
					}}
					href="/create-job"
				>
					Post a remote job
				</Link>
			</Stack>
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