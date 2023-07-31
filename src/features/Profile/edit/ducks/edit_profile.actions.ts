import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * NOTE: These are client based api calls.
 * We will use getServerSideProps to generate a page on the server.
 * This api call is only to use an api call on the client when user clicks on save button
 */
export const createEditProfile = createAsyncThunk(
	"createProfile",
	async (_, thunkApi) => {
		try {
			// add logic for sending api request.
		} catch (error: any) {}
	}
);
