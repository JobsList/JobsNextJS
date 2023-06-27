import Link from "@/components/Link";
import Subtitle1 from "@/components/Subtitle1";
import Subtitle2 from "@/components/Subtitle2";
import {
	Avatar,
	Box,
	Button,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";

const JobPostCompanyDetails = () => {
	return (
		<Box
			sx={{
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: "extra.grey",
				borderRadius: (theme) => theme.shape.borderRadius / 5,
				padding: (theme) => theme.spacing(18, 10),
				backgroundColor: (theme) => theme.palette.extra.backgroundColor,

				"&:hover": {
					cursor: "pointer",
				},
			}}
		>
			<Stack justifyContent="center" alignItems="center">
				<Avatar sx={{ width: 120, height: 120 }}>Logo</Avatar>
				<Subtitle1 mt={10}>Company Name</Subtitle1>
				<Link href="#">company-link</Link>
				<Button
					variant="contained"
					fullWidth
					size="large"
					sx={{ margin: (theme) => theme.spacing(10, 0) }}
				>
					Apply
				</Button>
				<Stack spacing={5} justifyContent="center" alignItems="center">
					<Typography fontSize={(theme) => theme.typography.fontSize * 1.3}>
						👀 4,531 views
					</Typography>
					<Typography fontSize={(theme) => theme.typography.fontSize * 1.3}>
						✅ 362 applied (8%){" "}
					</Typography>

					<Subtitle2>Share this job: </Subtitle2>
					<TextField
						value="https://remoteok.com/remote-jobs/remote-full-stack-engineer-with-salesforce-leadiq-247112?ref=sh"
						sx={{ backgroundColor: "extra.white" }}
						size="small"
						InputProps={{
							readOnly: true,
						}}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};

export default JobPostCompanyDetails;
