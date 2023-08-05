import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import UrlPattern from "url-pattern";

import * as endpoints from "./endpoints";

type EndpointType = keyof typeof endpoints;

type Payload = {
	method: Method;
	path: {
		url: EndpointType;
		params?: any;
	};
	data?: any;
	query?: any;
	extraBaseUrl?: string;
	token?: string;
};

const getUrlEndPoint = (url: EndpointType, params?: Object) => {
	const urlString = new UrlPattern(endpoints[url]);
	return urlString?.stringify?.(params);
};

const httpClient = async (payload: Payload) => {
	try {
		const { path, method, data, query, extraBaseUrl, token } = payload;
		const baseURL =
			extraBaseUrl ||
			`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`;
		const http = axios.create({
			baseURL,
		});

		const url = getUrlEndPoint(path.url, path.params);

		const options: AxiosRequestConfig = {
			headers: {
				"Content-type": "application/json",
			},
			method,
			url,
		};

		if (method === "GET" && query) {
			options.params = {
				...query,
			};
		}

		if (method !== "GET" && data) {
			options.data = data;
		}

		if (token) {
			options.headers = {
				...options.headers,
				Authorization: `Bearer ${token}`,
			};
		}

		const response = await http(options);

		return {
			response,
			error: null,
		};
	} catch (err: any) {
		// Add any logic for error, i.e to show any notification etc globally in application.

		if (err instanceof AxiosError) {
			console.log(err.status, err.message);
			return {
				status: err.status,
				message: err.message,
			};
		}
		/**
		 * Error logic will be handle here
		 */

		return {
			response: null,
			error: {
				message: "Something went wrong!",
			},
		};
	}
};

export default httpClient;
