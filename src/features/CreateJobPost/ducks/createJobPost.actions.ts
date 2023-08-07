import httpClient from "@/lib/config/http";
import uploadFile from "@/utils/uploadFile";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToRaw } from "draft-js";

export const createJobPost = createAsyncThunk(
	"createAJobPost",
	async (user: any, thunkApi: any) => {
		try {
			const jobPostState = thunkApi.getState()?.create_job;
			const { job_details } = jobPostState.payload;
			const uploadImage: any = await uploadFile(job_details.company_logo, user);

			if (uploadImage.url) {
				const { response, error } = await httpClient({
					method: "POST",
					path: {
						url: "CREATE_JOB_POST",
					},
					data: {
						...jobPostState.payload,
						job_details: {
							...job_details,
							company_logo: uploadImage.url,
							job_desc: convertToRaw(
								job_details?.job_desc?.getCurrentContent?.()
							),
							how_to_apply: convertToRaw(
								job_details?.how_to_apply?.getCurrentContent?.()
							),
						},
						user_id: user?.user?.id,
					},
					token: user.accessToken,
				});

				return thunkApi.fulfillWithValue(response?.data);
			}

			return thunkApi.rejectWithValue("Unable to complete your request!");
		} catch (error: any) {
			return thunkApi.rejectWithValue(
				error?.message || "Unable to process your request"
			);
		}
	}
);
