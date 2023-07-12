import { Divider, Stack, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import RenderSection from "./RenderSection";

const UserInfo: React.FC = () => {
	return (
		<Stack spacing={10} divider={<Divider flexItem />} mt={30}>
			<RenderSection title="🛂 Nationality">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
			<RenderSection title="🏡 Residency ">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
			<RenderSection title="📍 Location">
				<Typography>🇵🇰 Pakistan</Typography>
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
				<Typography>🇵🇰 Pakistan</Typography>
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
				<Typography>🇵🇰 Pakistan</Typography>
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
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
			<RenderSection title="Skilled in">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
			<RenderSection title="Fluent in">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
			<RenderSection title="Preferred annual pay (min)">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
			<RenderSection title="Preferred hourly pay (min)">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
			<RenderSection title="Badges">
				<Typography>🇵🇰 Pakistan</Typography>
			</RenderSection>
		</Stack>
	);
};

export default UserInfo;
