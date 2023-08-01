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
	available_from: Date;
	prefer_time_zone: string[];
	annual_pay: number;
	hourly_rate: number;
	website: string;
	telegram: string;
	github: string;
	twitter: string;
	linkedIn: string;
	insta: string;
	educations?: Education;
	employment?: Employment;
	side_projects?: SideProjects;
	user_id: number;
};

export type EditProfileState = {
	loading: boolean;
	error: string;
	profile: Profile;
	// Below will be used separetely for updating, or creating
	educations: Education;
	side_projects: SideProjects;
	employment: Employment;
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
		available_from: new Date(),
		prefer_time_zone: [],
		annual_pay: 0,
		hourly_rate: 0,
		website: "",
		telegram: "",
		github: "",
		twitter: "",
		linkedIn: "",
		insta: "",
		educations: undefined,
		employment: undefined,
		side_projects: undefined,
		user_id: 0,
	},
	educations: {
		id: undefined,
		start_date: new Date(),
		end_date: new Date(),
		title: "",
		school: "",
		link: "",
		profile_id: 0,
		user_id: 0,
	},
	side_projects: {
		id: undefined,
		start_date: new Date(),
		end_date: new Date(),
		project_name: "",
		link: "",
		profile_id: 0,
		user_id: 0,
	},
	employment: {
		id: undefined,
		start_date: new Date(),
		end_date: new Date(),
		title: "",
		company: "",
		link: "",
		profile_id: 0,
		user_id: 0,
	},
};