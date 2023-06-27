type RANGE = {
	min?: number;
	max?: number;
};

const MULTIPLIER = 10000;

const getPerYear = ({ min = 1, max = 75 }: RANGE): Array<number> => {
	const range = [];
	for (let i = min; i <= max; i++) {
		range.push(i * MULTIPLIER);
	}

	return range;
};
