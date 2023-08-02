import httpClient from "@/lib/config/http";
import uploadFile from "@/utils/uploadFile";
import { createAsyncThunk } from "@reduxjs/toolkit";

type CloudinaryAPiResponse = {
	asset_id: string;
	public_id: string;
	version: string;
	version_id: string;
	signature: string;
	width: number;
	height: number;
	format: string;
	resource_type: string;
	created_at: string;
	tags: Array<any>;
	bytes: number;
	type: string;
	etag: string;
	placeholder: boolean;
	url: string;
	secure_url: string;
	folder: string;
	access_mode: string;
};

/**
 * NOTE: These are client based api calls.
 * We will use getServerSideProps to generate a page on the server.
 * This api call is only to use an api call on the client when user clicks on save button
 */
export const createEditProfile = createAsyncThunk(
	"createProfile",
	async (user: any, thunkApi: any) => {
		try {
			const edit_profile = thunkApi?.getState?.().edit_profile;

			const { profile } = edit_profile || {};

			const uploadImage: any = await uploadFile(profile.photo, user);

			if (uploadImage.url) {
				const _profile = {
					...profile,
					photo: uploadImage.url,
					user_id: user?.user?.id,
				};

				const { response, error } = await httpClient({
					method: "POST",
					path: {
						url: "CREATE_PROFILE",
					},
					data: _profile,
					token: user.accessToken,
				});

				if (error) {
					return thunkApi.rejectWithValue(error);
				}

				return thunkApi.fulfillWithValue(response?.data);
			}

			return thunkApi.rejectWithValue({
				message: "Unable to process your request!",
			});
		} catch (error: any) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
