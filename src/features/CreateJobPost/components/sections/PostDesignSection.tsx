/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Stack, Typography, styled } from "@mui/material";

import CheckboxWithBoost from "../CheckboxWithBoost";
import ExpectedViewsAndClicks from "../ExpectedViewsAndClicks";
import QRCodeSvg from "@/icons/QRCodeSvg";
import CustomLink from "@/components/Link";
import CardWithTitle from "@/components/CardWithTitle";

const Link = styled(CustomLink)(({ theme }) => ({
	color: theme.palette.primary.main,
	borderColor: theme.palette.primary.main,
}));

const Text = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.fontSize * 1.25,
}));

const PostDesignSection = () => {
	return (
		<CardWithTitle title="Design your job post">
			<Stack>
				<CheckboxWithBoost
					labelText={
						<Text>
							Get 🙋‍♀️ premium support and help with your job posts (+$89)
						</Text>
					}
				/>
				<CheckboxWithBoost
					labelText={
						<Text>Show my ⭐️ company logo besides my post (+$44)</Text>
					}
					boostText="2x more views"
				/>
				<CheckboxWithBoost
					labelText={
						<Text>
							Email blast my job post to 📮 625,874 remote candidates (+$89)
						</Text>
					}
					boostText="3x more views"
				/>
				<CheckboxWithBoost
					labelText={
						<Text>
							Get auto matched with suitable applicants from our{" "}
							<Link href="/">directory of remote workers</Link> to share easily
							(+$44)
						</Text>
					}
				/>
				<CheckboxWithBoost
					labelText={
						<Text sx={{ display: "flex", alignItems: "center" }}>
							Create a <QRCodeSvg sx={{ color: "bw.black" }} />
							QR-code short link for your post like&nbsp;
							<Link href="/">rok.co/f4</Link>
						</Text>
					}
				/>

				<CheckboxWithBoost
					labelText={<Text>Highlight your post in ⚠️ yellow (+$49)</Text>}
					boostText="2x more views"
				/>
				<CheckboxWithBoost
					labelText={
						<Text>
							Sticky your post so it says on 📌 top of frontpage for ⏰ 24 hours
							(+$134)
						</Text>
					}
					boostText="2x more views"
				/>

				<CheckboxWithBoost
					labelText={
						<Text>
							Sticky your post so it says on 📌 top of frontpage for 🗓️ 1 week
							(+$334)
						</Text>
					}
					boostText="6x more views"
				/>

				<CheckboxWithBoost
					labelText={
						<Text>
							Sticky your post so it says on 📌 top of frontpage for 🗓️ 1 month
							(+$942)
						</Text>
					}
					boostText="9x more views"
				/>

				<CheckboxWithBoost
					labelText={
						<Text>
							Geolock your post for people only in the location it's restricted
							to above and block applicants from elsewhere (+$89)
						</Text>
					}
				/>

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
