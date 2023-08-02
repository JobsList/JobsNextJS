import { SideProjects } from "../edit_profile.state";

export type EmploymentState = {
	loading: boolean;
	error: string;
	sideProjects: SideProjects[];
};

export const sideProjectState: EmploymentState = {
	loading: false,
	error: "",
	sideProjects: [
		{
			start_date: new Date(),
			end_date: new Date(),
			project_name: "",
			link: "",
			profile_id: 0,
			user_id: 0,
		},
	],
};
