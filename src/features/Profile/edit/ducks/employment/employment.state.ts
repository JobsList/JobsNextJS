import { Employment } from "../edit_profile.state";

export type EmploymentState = {
	loading: boolean;
	error: string;
	employment: Employment[];
};

export const employmentState: EmploymentState = {
	loading: false,
	error: "",
	employment: [
		{
			start_date: new Date(),
			end_date: new Date(),
			title: "",
			company: "",
			link: "",
			profile_id: 0,
			user_id: 0,
		},
	],
};
