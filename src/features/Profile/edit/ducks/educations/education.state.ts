import { Education } from "../edit_profile.state";

export type EducationState = {
	loading: boolean;
	error: string;
	educations: Education[];
};

export const educationState: EducationState = {
	loading: false,
	error: "",
	educations: [
		{
			start_date: new Date(),
			end_date: new Date(),
			title: "",
			school: "",
			link: "",
			profile_id: 0,
			user_id: 0,
		},
	],
};
