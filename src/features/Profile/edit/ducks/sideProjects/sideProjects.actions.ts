import httpClient from "@/lib/config/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOrUpdateSideProjects = createAsyncThunk(
	"createOrUpdateSideProjects",
	async (user: any, thunkApi: any) => {
		try {
			const sideProjectState = thunkApi?.getState?.().side_projects;

			const { sideProjects = [] } = sideProjectState || {};

			const { response, error } = await httpClient({
				method: "POST",
				path: {
					url: "CREATE_UPDATE_SIDEPROJECTS",
				},
				data: {
					projects: sideProjects,
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
