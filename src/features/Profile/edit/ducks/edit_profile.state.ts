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

export type Employment = {
	id?: number;
	start_date: Date;
	end_date?: Date;
	title: string;
	company: string;
	link: string;
	profile_id: number;
	user_id: number;
};

export type SideProjects = {
	id?: number;
	start_date: Date;
	end_date?: Date;
	project_name: string;
	link: string;
	profile_id: number;
	user_id: number;
};

export type AccountType = "worker" | "hiring";

export type Profile = {
	id?: number;
	username: string;
	account_type: AccountType;
	photo: string;
	location: string;
	residency: string;
	nationality: string;
	email: string;
	email_notification: boolean;
	gender: string;
	bio: string;
	skills: string[];
	languages: string[];
	available_from: string;
	available: boolean;
	prefer_time_zone: string[];
	annual_pay: number;
	hourly_rate: number;
	website: string;
	telegram: string;
	github: string;
	twitter: string;
	linkedIn: string;
	insta: string;
	education: Education[];
	employment: Employment[];
	side_projects: SideProjects[];
	profile_id: number;
	user_id: number;
};

export type EditProfileState = {
	loading: boolean;
	error: string;
	profile: Profile;
};

export const editProfileState: EditProfileState = {
	loading: false,
	error: "",
	profile: {
		id: undefined,
		username: "",
		account_type: "worker",
		photo: "",
		location: "",
		residency: "",
		nationality: "",
		email: "",
		email_notification: false,
		gender: "",
		bio: "",
		skills: [],
		languages: [],
		available_from: new Date().toISOString(),
		available: true,
		prefer_time_zone: [],
		annual_pay: 0,
		hourly_rate: 0,
		website: "",
		telegram: "",
		github: "",
		twitter: "",
		linkedIn: "",
		insta: "",
		education: [
			{
				id: undefined,
				start_date: new Date(),
				end_date: new Date(),
				title: "",
				school: "",
				link: "",
				profile_id: 0,
				user_id: 0,
			},
		],
		employment: [],
		side_projects: [],
		profile_id: 0,
		user_id: 0,
	},
};
