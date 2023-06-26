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
};

const getUrlEndPoint = (url: EndpointType, params?: any) => {
	const urlString = new UrlPattern(endpoints[url]);
	return urlString.stringify(params);
};

const httpClient = async (payload: Payload) => {
	try {
		const { path, method, data, query, extraBaseUrl } = payload;
		const baseURL =
			extraBaseUrl || `${process.env.BASE_URL}/${process.env.API_VERSION}`;
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
			options.params.query = JSON.stringify(query);
		}

		if (method !== "GET" && data) {
			options.data = JSON.stringify(data);
		}

		//TODO: Will add token logic here once we start adding login and logout logic here

		const response = await http(options);

		return {
			response,
			error: null,
		};
	} catch (err: any) {
		// Add any logic for error, i.e to show any notification etc globally in application.
		const { message, status } = err as AxiosError;

		console.log("ERROR ====> ", err);
		/**
		 * Error logic will be handle here
		 */
		// let errorMessage = message;
		// const { error = "" } = err.response.data || {};
		// if (error) {
		// 	errorMessage = error;
		// }

		return {
			response: null,
			error: {
				message: "",
				status,
			},
		};
	}
};

export default httpClient;
