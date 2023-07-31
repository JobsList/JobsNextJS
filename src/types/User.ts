type Profile = {
	id?: number;
	username: string;
	account_type: string;
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
};

type UserInfo = {
	id?: string;
	email?: string;
	profile?: Profile;
};

export type User = {
	accessToken?: string;
	expires?: string;
	user?: UserInfo;
};
