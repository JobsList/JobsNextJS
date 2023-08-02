export type Education = {
	id?: number;
	start_date: Date;
	end_date?: Date;
	title: string;
	school: string;
	link: string;
	profile_id: number;
	user_id: number;
};

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
