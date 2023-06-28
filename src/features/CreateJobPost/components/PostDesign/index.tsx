/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Stack, Typography } from "@mui/material";

import ExpectedViewsAndClicks from "./ExpectedViewsAndClicks";
import CardWithTitle from "@/components/CardWithTitle";
import Premium from "./Premium";
import ShowCompanyLogo from "./ShowCompanyLogo";
import EmailBlast from "./EmailBlast";
import AutoMatched from "./AutoMatched";
import QRCode from "./QRCode";
import HighlightInYellow from "./HighlightInYellow";
import StickyPost from "./StickyPost";
import Geolock from "./Gelock";

const PostDesignSection = () => {
	return (
		<CardWithTitle title="Design your job post">
			<Stack flexWrap="wrap">
				<Premium />
				<ShowCompanyLogo />
				<EmailBlast />
				<AutoMatched />
				<QRCode />
				<HighlightInYellow />
				<StickyPost />
				<Geolock />
				<ExpectedViewsAndClicks />

				<Typography fontSize={12} color="grey" mt={20}>
					Pricing of job posts and extra features is dynamic and may change
					based on how many jobs are posted every week, for example to avoid too
					many sticky jobs at one time. Sticky posts are limited to max 2 per
					company at one time. Job posts are a) published for 30 days, b) cannot
					be refunded, and c) renew automatically after 30 days unless you 1)
					disable auto renew after posting on the edit page, or 2) close your
					job post on the edit page. We send a reminder 7 days by email before
					renewing. Renewing is the same price as the original job post for 30
					days. If you buy a bundle, the discounted single job post price is
					used to renew. Automatic renewals can be self-refunded within 7 days
					after renewing with the link in the email.
				</Typography>
			</Stack>
		</CardWithTitle>
	);
};

export default PostDesignSection;
