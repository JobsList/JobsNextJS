export const hasSpecialCharacters = (text: string) => {
	const regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	return regex.test(text);
};
