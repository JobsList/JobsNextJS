import createJobPostReducer from "@/features/CreateJobPost/ducks/createJobPost.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

const logger = createLogger({});

const store = configureStore({
	reducer: {
		create_job: createJobPostReducer,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger);
	},
	devTools: process.env.NEXT_PUBLIC_NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/**
 * NOTE: Store is only responsible for setting data in the redux specially for forms etc.
 */
export default store;