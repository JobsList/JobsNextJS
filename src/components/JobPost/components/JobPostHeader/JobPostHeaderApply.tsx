import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Typography, styled } from "@mui/material";
import MUIButton from "@/components/Button";
import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";
import dayjs from "dayjs";
import Link from "@/components/Link";

const Button = styled(MUIButton)(({ theme }) => ({
	marginLeft: theme.spacing(6),
	[theme.breakpoints.down("md")]: {
		display: "none !important",
	},
}));

type JobPostHeaderApplyProps = {
	preview?: boolean;
	post: JOB_POST_PAYLOAD;
};

const JobPostHeaderApply: React.FC<JobPostHeaderApplyProps> = ({
	preview,
	post,
}) => {
	const { createdAt = new Date() } = post;
	const days = Math.abs(dayjs(createdAt).diff(new Date(), "days"));

	return (
		<>
			{!preview ? (
				<Typography
					sx={{
						display: "flex",
						alignItems: "center",
						marginLeft: (theme) => theme.spacing(15),
					}}
				>
					<AccessTimeIcon sx={{ marginRight: (theme) => theme.spacing(1) }} />
					{days === 0 ? "Today" : `${days}d`}
				</Typography>
			) : null}

			{preview ? (
				<Button
					preview={preview}
					variant={!preview ? "contained" : "outlined"}
					fullWidth
				>
					Apply
				</Button>
			) : (
				<Link
					target="_blank"
					sx={{
						backgroundColor: (theme) => theme.palette.primary.main,
						color: (theme) => theme.palette.extra.white,
						margin: (theme) => theme.spacing(0, 1),
						padding: (theme) => theme.spacing(3, 20),
						borderRadius: (theme) => theme.shape.borderRadius - 7,
						borderBottomWidth: 0,
						boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
					}}
					href={`${post?.job_details?.apply_with_url}`}
				>
					Apply
				</Link>
			)}
		</>
	);
};

export default JobPostHeaderApply;
