import {
	DEFAULT_CLICKS,
	DEFAULT_VIEWS,
} from "@/utils/calculateExpectedClickAndViews";
import { EditorState } from "draft-js";
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
	show_logo: BOOST_TYPE;
	email_blast: BOOST_TYPE;
	auto_matched?: boolean;
	qr_code: boolean;
	highlight: HIGHLIGHT & {
		boost: number;
	};
	sticky: POST_STICKY & {
		hoursBoost: number;
		weekBoost: number;
		monthBoost: number;
	};
	geolock: boolean;
};

export type JOB_DETAIL_TYPE = {
	company_logo?: string;
	highlight: HIGHLIGHT & {
		boost: number;
	};
	salary: SALARY;
	job_desc: EditorState;
	benefits: Array<BenefitType>;
	howToApply?: EditorState;
	apply_with_url?: string;
	apply_with_email?: string;
};

export type COMPANY_DETAILS_TYPE = {
	twitter_name?: string;
	company_email: string;
	invoice_email?: string;
	invoice_address: string;
	invoice_note_po_number?: string;
	pay_later?: boolean;
};

export type FEEDBACK_TYPE = {
	feedback?: string;
};

export type EXPECTED_RESULT = {
	views: number;
	clicks: number;
};

export type JOB_POST_PAYLOAD = {
	id?: string;
	company_name: string;
	position: string;
	positionType: string;
	tags: Array<string>;
	location: Array<string>;
	post_design: POST_DESIGN_TYPE;
	job_details: JOB_DETAIL_TYPE;
	company_detail: COMPANY_DETAILS_TYPE;
	feedback?: FEEDBACK_TYPE;
	expected_result: EXPECTED_RESULT;
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
		positionType: "full-time",
		tags: [],
		location: [],
		post_design: {
			premium: false,
			show_logo: {
				active: false,
				boost: 2,
			},
			email_blast: {
				active: false,
				boost: 3,
			},
			auto_matched: false,
			qr_code: false,
			highlight: {
				active: false,
				color: "yellow",
				boost: 2,
			},
			sticky: {
				active: false,
				type: undefined,
				hoursBoost: 2,
				weekBoost: 6,
				monthBoost: 9,
			},
			geolock: false,
		},
		job_details: {
			company_logo: "",
			highlight: {
				active: false,
				color: "#ffffff",
				boost: 3,
			},
			salary: {
				min: 0,
				max: 0,
			},
			job_desc: EditorState.createEmpty(),
			benefits: [],
			howToApply: EditorState.createEmpty(),
			apply_with_url: "",
			apply_with_email: "",
		},
		company_detail: {
			twitter_name: "",
			company_email: "",
			invoice_email: "",
			invoice_address: "",
			invoice_note_po_number: "",
			pay_later: false,
		},
		expected_result: {
			views: DEFAULT_VIEWS,
			clicks: DEFAULT_CLICKS,
		},
	},
};
