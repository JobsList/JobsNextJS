import { EditorState } from "draft-js";
import { POSITION_TYPE } from "../components/PositionType/PositionTypeData";

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
	type: STICKY_POST_TYPE;
};

export type POST_DESIGN_TYPE = {
	premium?: boolean;
	show_logo?: boolean;
	email_blast?: boolean;
	auto_matched?: boolean;
	qr_code?: boolean;
	highlight?: HIGHLIGHT;
	sticky?: POST_STICKY;
	geolock?: boolean;
};

export type JOB_DETAIL_TYPE = {
	company_logo: string;
	highlight?: HIGHLIGHT;
	salary: SALARY;
	job_desc: EditorState;
	benefits: Array<string>;
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

export type CREATE_JOB_POST_PAYLOAD = {
	company_name: string;
	position: string;
	positionType: POSITION_TYPE;
	tags: Array<string>;
	location: Array<string>;
	post_design: POST_DESIGN_TYPE;
	job_details: JOB_DETAIL_TYPE;
	company_detail: COMPANY_DETAILS_TYPE;
	feedback?: FEEDBACK_TYPE;
};

export type CREATE_JOB_POST_INITIAL_STATE = {
	loading: boolean;
	error: string;
	payload: CREATE_JOB_POST_PAYLOAD;
};

export const create_post_initial_state: CREATE_JOB_POST_INITIAL_STATE = {
	loading: false,
	error: "",
	payload: {
		company_name: "",
		position: "",
		positionType: {
			value: "",
			title: "",
		},
		tags: [],
		location: [],
		post_design: {
			premium: undefined,
			show_logo: undefined,
			email_blast: undefined,
			auto_matched: undefined,
			qr_code: undefined,
			highlight: undefined,
			sticky: undefined,
			geolock: undefined,
		},
		job_details: {
			company_logo: "",
			highlight: undefined,
			salary: {
				min: 0,
				max: 0,
			},
			job_desc: EditorState.createEmpty(),
			benefits: [],
			howToApply: EditorState.createEmpty(),
			apply_with_url: undefined,
			apply_with_email: undefined,
		},
		company_detail: {
			twitter_name: undefined,
			company_email: "",
			invoice_email: undefined,
			invoice_address: "",
			invoice_note_po_number: undefined,
			pay_later: undefined,
		},
	},
};
