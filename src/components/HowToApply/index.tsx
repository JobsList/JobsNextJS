/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import Subtitle2 from "../Subtitle2";

const HowToApply = () => {
	return (
		<Box
			sx={{
				width: "80%",
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: "extra.grey",
				margin: (theme) => theme.spacing(5, "auto"),
				borderRadius: (theme) => theme.shape.borderRadius / 5,
				padding: (theme) => theme.spacing(14, 18),
			}}
		>
			<Stack alignItems="center">
				<Title>How To Apply?</Title>
				<Subtitle2>Process</Subtitle2>
			</Stack>

			<ul>
				<li>Apply with an intro</li>
				<li>Product engineering take home</li>
				<li>Interview with founders</li>
				<li>Reference check</li>
				<li>Offer</li>
			</ul>

			<Button variant="contained" fullWidth size="large">
				Apply to this job
			</Button>

			<Typography
				fontWeight={(theme) => theme.typography.fontWeightBold}
				textAlign="center"
				mt={10}
				mb={10}
			>
				👉 Please reference you found the job on Job Search, this helps us get
				more companies to post here, thanks!
			</Typography>

			<Typography textAlign="center" mt={10} mb={10}>
				When applying for jobs, you should NEVER have to pay to apply. You
				should also NEVER have to pay to buy equipment which they then pay you
				back for later. Also never pay for trainings you have to do. Those are
				scams! NEVER PAY FOR ANYTHING! Posts that link to pages with "how to
				work online" are also scams. Don't use them or pay for them. Also always
				verify you're actually talking to the company in the job post and not an
				imposter. A good idea is to check the domain name for the site/email and
				see if it's the actual company's main domain name. Scams in remote work
				are rampant, be careful! Read more to avoid scams. When clicking on the
				button to apply above, you will leave Remote OK and go to the job
				application page for that company outside this site. Remote OK accepts
				no liability or responsibility as a consequence of any reliance upon
				information on there (external sites) or here.
			</Typography>
		</Box>
	);
};

export default HowToApply;
