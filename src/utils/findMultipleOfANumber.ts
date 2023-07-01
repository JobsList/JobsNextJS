export default function findAMultipleOfANumber(num: number, value: number) {
	const multiple = Math.floor(value / num) * num;
	const diff = Math.abs(multiple - value);

	return {
		multiple,
		remaining: diff,
	};
}
