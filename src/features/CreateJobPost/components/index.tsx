import React from "react";
import BasicInfo from "./BasicInfo";
import PostDesign from "./PostDesign";
import { Stack } from "@mui/material";
import JobDetails from "./JobDetails";
import CompanyDetails from "./CompanyDetails";
import Preview from "./Preview";
import Feedback from "./Feedback";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { createJobPost } from "../ducks/createJobPost.actions";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/router";

const CreatePostForm = () => {
	const { user } = useAuth();
	const dispatch = useAppDispatch();
	const { loading } = useAppSelect((state) => state.create_job);
	const router = useRouter();

	const onCreate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await dispatch(createJobPost(user));
		router.push("/");
	};

	return (
		<Stack spacing={25}>
			<form onSubmit={onCreate}>
				<BasicInfo />
				<PostDesign />
				<JobDetails />
				<CompanyDetails />
				<Feedback />
				<Preview />
				<Stack>
					<Button
						disabled={loading}
						type="submit"
						variant="contained"
						size="large"
					>
						{loading ? "Loading..." : "Create Job Post"}
					</Button>
				</Stack>
			</form>
		</Stack>
	);
};

export default CreatePostForm;
