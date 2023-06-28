import { EXPECTED_RESULT } from "@/features/CreateJobPost/ducks/createJobPost.store";

export type OPERATION = "DIVIDE" | "MULTIPLY";

type RESULT = {
	clicks: number;
	views: number;
};

export const DEFAULT_CLICKS = 142;
export const DEFAULT_VIEWS = 16;

const calculateExpectedClickAndViews = (
	boost: number,
	expected_result: EXPECTED_RESULT,
	operation: OPERATION
): RESULT => {
	let clicks: number = 0;
	let views: number = 0;
	if (operation === "DIVIDE") {
		clicks = expected_result.clicks / boost;
		views = expected_result.views / boost;
	} else if (operation === "MULTIPLY") {
		clicks = expected_result.clicks * boost;
		views = expected_result.views * boost;
	}

	return {
		clicks,
		views,
	};
};

export default calculateExpectedClickAndViews;
