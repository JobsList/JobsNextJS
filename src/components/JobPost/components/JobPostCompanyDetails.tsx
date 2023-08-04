import Link from "@/components/Link";
import Subtitle1 from "@/components/Subtitle1";
import Subtitle2 from "@/components/Subtitle2";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";
import {
	Avatar,
	Box,
	Button,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";

type JobPostCompanyDetailsProps = {
	preview?: boolean;
	post: JOB_POST_PAYLOAD;
};

const JobPostCompanyDetails: React.FC<JobPostCompanyDetailsProps> = ({
	post,
}) => {
	const { company_name, job_details } = post;

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
				<Avatar
					src={job_details?.company_logo}
					sx={{ width: 120, height: 120 }}
				>
					Logo
				</Avatar>
				<Subtitle1 mt={10}>{company_name || ""}</Subtitle1>
				<Link target="_blank" href={job_details.apply_with_url || "/"}>
					{job_details.apply_with_url}
				</Link>
				<Button
					variant="contained"
					fullWidth
					size="large"
					sx={{ margin: (theme) => theme.spacing(10, 0) }}
				>
					Apply
				</Button>
				<Stack spacing={5} justifyContent="center" alignItems="center">
					{/* <Typography fontSize={(theme) => theme.typography.fontSize * 1.3}>
						👀 4,531 views
					</Typography>
					<Typography fontSize={(theme) => theme.typography.fontSize * 1.3}>
						✅ 362 applied (8%){" "}
					</Typography> */}

					<Subtitle2>Share this job: </Subtitle2>
					<TextField
						value={job_details.apply_with_url}
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
