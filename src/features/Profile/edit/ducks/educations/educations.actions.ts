import httpClient from "@/lib/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrUpdateEducation = createAsyncThunk(
	"createOrUpdateEducation",
	async (user: any, thunkApi: any) => {
		try {
			const educations = thunkApi?.getState?.().educations;

			const { educations: EducationPayload = [] } = educations || {};

			const { response, error } = await httpClient({
				method: "POST",
				path: {
					url: "CREATE_UPDATE_EDUCATION",
				},
				data: {
					educations: EducationPayload,
				},
				token: user.accessToken,
			});

			if (error) {
				return thunkApi.rejectWithValue(error);
			}

			return thunkApi.fulfillWithValue(response?.data);
		} catch (error: any) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
