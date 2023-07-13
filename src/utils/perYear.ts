type RANGE = {
	min?: number;
	max?: number;
};

const MULTIPLIER = 10000;

const getPerYear = ({ min = 1, max = 75 }: RANGE): Array<string> => {
	const range: string[] = [];
	for (let i = min; i <= max; i++) {
		range.push((i * MULTIPLIER).toLocaleString("en-US"));
	}

	return range;
};

export default getPerYear;
