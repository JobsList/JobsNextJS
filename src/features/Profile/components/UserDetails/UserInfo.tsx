import { Divider, Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import RenderSection from "./RenderSection";
import { Profile } from "../../edit/ducks/edit_profile.state";

type Props = {
	profile: Profile;
};

const UserInfo: React.FC<Props> = ({ profile }) => {
	const {
		nationality = "",
		residency = "",
		location = "",
		telegram = "",
		github = "",
		insta = "",
		linkedIn,
		skills = [],
		languages = [],
		annual_pay = 0,
		hourly_rate = 0,
	} = profile || {};
	return (
		<Stack spacing={10} divider={<Divider flexItem />} mt={30}>
			<RenderSection title="🛂 Nationality">
				<Typography>{nationality}</Typography>
			</RenderSection>
			<RenderSection title="🏡 Residency ">
				<Typography>{residency}</Typography>
			</RenderSection>
			<RenderSection title="📍 Location">
				<Typography>{location}</Typography>
			</RenderSection>
			<RenderSection
				title={
					<span style={{ display: "flex", alignItems: "center" }}>
						<TelegramIcon
							sx={{
								color: "#36A0F1",
								marginRight: (theme) => theme.spacing(1),
							}}
							fontSize="small"
						/>
						Telegram
					</span>
				}
			>
				<Typography>@{telegram}</Typography>
			</RenderSection>
			<RenderSection
				title={
					<span style={{ display: "flex", alignItems: "center" }}>
						<GitHubIcon
							sx={{
								marginRight: (theme) => theme.spacing(1),
								fontSize: (theme) => theme.typography.fontSize * 1.2,
							}}
						/>
						Github
					</span>
				}
			>
				<Typography>@{github}</Typography>
			</RenderSection>
			<RenderSection
				title={
					<span style={{ display: "flex", alignItems: "center" }}>
						<LinkedInIcon
							sx={{
								marginRight: (theme) => theme.spacing(1),
								fontSize: (theme) => theme.typography.fontSize * 1.2,
								color: "#03A9F4",
							}}
						/>
						LinkedIn
					</span>
				}
			>
				<Typography>{linkedIn}</Typography>
			</RenderSection>
			<RenderSection
				title={
					<span style={{ display: "flex", alignItems: "center" }}>
						<LinkedInIcon
							sx={{
								marginRight: (theme) => theme.spacing(1),
								fontSize: (theme) => theme.typography.fontSize * 1.2,
								color: "#03A9F4",
							}}
						/>
						Insta
					</span>
				}
			>
				<Typography>@{insta}</Typography>
			</RenderSection>
			<RenderSection title="Skilled in">
				<Typography>{skills.join(", ")}</Typography>
			</RenderSection>
			<RenderSection title="Fluent in">
				<Typography>{languages.join(", ")}</Typography>
			</RenderSection>
			<RenderSection title="Preferred annual pay (min)">
				<Typography>${annual_pay}</Typography>
			</RenderSection>
			<RenderSection title="Preferred hourly pay (min)">
				<Typography>${hourly_rate} per hour</Typography>
			</RenderSection>
			{/* <RenderSection title="Badges">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection> */}
		</Stack>
	);
};

export default UserInfo;
