import { JOB_POST_PAYLOAD } from "@/features/CreateJobPost/ducks/createJobPost.store";

type HomeState = {
	loading: boolean;
	error: string;
	jobs: Array<JOB_POST_PAYLOAD>;
};

export const homState: HomeState = {
	loading: false,
	error: "",
	jobs: [],
};
