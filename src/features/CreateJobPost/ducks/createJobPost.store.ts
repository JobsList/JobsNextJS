import {
	DEFAULT_CLICKS,
	DEFAULT_VIEWS,
} from "@/utils/calculateExpectedClickAndViews";
import { EditorState, RawDraftContentState } from "draft-js";
import { BenefitType } from "../components/JobDetails/Benefits/Benefit";

export type STICKY_POST_TYPE = "hours" | "week" | "month";

export type SALARY = {
	min: number;
	max: number;
};

export type HIGHLIGHT = {
	color: string;
	active: boolean;
};

export type POST_STICKY = {
	active: boolean;
	type?: STICKY_POST_TYPE;
};

export type BOOST_TYPE = {
	active: boolean;
	boost: number;
};

export type POST_DESIGN_TYPE = {
	premium: boolean;
	show_company_logo: BOOST_TYPE;
	email_blast: BOOST_TYPE;
	auto_matched?: boolean;
	qr_code: boolean;
	highlight_in_yellow: HIGHLIGHT & {
		boost: number;
	};
	sticky_post: POST_STICKY & {
		hoursBoost: number;
		weekBoost: number;
		monthBoost: number;
	};
	geo_lock: boolean;
};

export type JOB_DETAIL_TYPE = {
	company_logo?: string;
	post_hightlight: HIGHLIGHT & {
		boost: number;
	};
	min_per_year: number;
	max_per_year: number;
	job_desc: any;
	benefits: Array<BenefitType>;
	how_to_apply: any;
	apply_with_url?: string;
	apply_with_email?: string;
};

export type COMPANY_DETAILS_TYPE = {
	twitter?: string;
	email: string;
	invoice_email?: string;
	invoice_address: string;
	invoice_note_po?: string;
	pay_later?: boolean;
};

export type EXPECTED_RESULT = {
	views: number;
	clicks: number;
};

export type LOCATION = {
	name?: string;
	location?: string;
	emoji: string;
};

export type JOB_POST_PAYLOAD = {
	id?: string;
	company_name: string;
	position: string;
	position_type: string;
	tags: Array<string> | Array<any>;
	locations: Array<LOCATION>;
	post_design: POST_DESIGN_TYPE;
	job_details: JOB_DETAIL_TYPE;
	company_details: COMPANY_DETAILS_TYPE;
	feedback?: string;
	expected_result: EXPECTED_RESULT;
	createdAt?: string;
};

export type CREATE_JOB_POST_INITIAL_STATE = {
	loading: boolean;
	error: string;
	payload: JOB_POST_PAYLOAD;
};

export const create_post_initial_state: CREATE_JOB_POST_INITIAL_STATE = {
	loading: false,
	error: "",
	payload: {
		company_name: "",
		position: "",
		position_type: "full-time",
		tags: [],
		locations: [{ name: "Worldwide", emoji: "🌏" }],
		post_design: {
			premium: false,
			show_company_logo: {
				active: false,
				boost: 2,
			},
			email_blast: {
				active: false,
				boost: 3,
			},
			auto_matched: false,
			qr_code: false,
			highlight_in_yellow: {
				active: false,
				color: "yellow",
				boost: 2,
			},
			sticky_post: {
				active: false,
				type: undefined,
				hoursBoost: 2,
				weekBoost: 6,
				monthBoost: 9,
			},
			geo_lock: false,
		},
		job_details: {
			company_logo: "",
			post_hightlight: {
				active: false,
				color: "#ffffff",
				boost: 3,
			},
			min_per_year: 0,
			max_per_year: 0,
			benefits: [],
			apply_with_url: "",
			apply_with_email: "",
			job_desc: EditorState.createEmpty(),
			how_to_apply: EditorState.createEmpty(),
		},
		company_details: {
			twitter: "",
			email: "",
			invoice_email: "",
			invoice_address: "",
			invoice_note_po: "",
			pay_later: false,
		},
		expected_result: {
			views: DEFAULT_VIEWS,
			clicks: DEFAULT_CLICKS,
		},
		feedback: "",
		createdAt: new Date().toISOString(),
	},
};
