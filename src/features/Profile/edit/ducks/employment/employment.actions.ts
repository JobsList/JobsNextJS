import httpClient from "@/lib/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrUpdateEmployment = createAsyncThunk(
	"createOrUpdateEmployment",
	async (user: any, thunkApi: any) => {
		try {
			const employmentState = thunkApi?.getState?.().employment;

			const { employment = [] } = employmentState || {};

			const { response, error } = await httpClient({
				method: "POST",
				path: {
					url: "CREATE_UPDATE_EDUCATION",
				},
				data: {
					employments: employment,
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
