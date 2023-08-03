import httpClient from "@/lib/config/http";

/**
 *
 * @param file string | ArrayBuffer | null
 * @param user
 * @returns Promise<CloudinaryReponse, error>
 */
const uploadFile = (file: any, user: any) =>
	new Promise(async (res, rej) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append(
			"upload_preset",
			`${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`
		);
		formData.append("resource_type", "image");
		formData.append("api_key", `${process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}`);
		formData.append(
			"api_secret",
			`${process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}`
		);
		formData.append("folder", user?.user?.email || "");
		// await axios.post("/api/upload_file", formData);
		const { response, error } = await httpClient({
			extraBaseUrl: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}`,
			method: "POST",
			path: {
				url: "UPLOAD_IMAGE_FILE",
			},
			data: formData,
		});

		if (response?.data) {
			return res(response.data);
		} else {
			return rej("Unable to upload your file");
		}
	});

export default uploadFile;
