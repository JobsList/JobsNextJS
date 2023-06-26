const getBase64 = (
	file: any,
	callback = (base64: string | ArrayBuffer | null = "") => {}
) => {
	let reader = new FileReader();
	reader.readAsDataURL(file);

	reader.onload = function () {
		callback(reader.result);
	};

	reader.onerror = function (err) {
		console.error(err);
	};
};

export default getBase64;
