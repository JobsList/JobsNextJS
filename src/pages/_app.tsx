import { LayoutComponent } from "@/layouts";
import theme from "@/theme";
import createEmotionCache from "@/theme/createEmotionCache";
import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { NextComponentType } from "next";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";

const emotionClientCache = createEmotionCache();

type NextComponentWithLayout = NextComponentType & {
	layout: LayoutComponent;
};

interface MainAppProps extends AppProps {
	emotionCache?: EmotionCache;
	Component: NextComponentWithLayout;
}

function Bootstrap({
	Component,
	emotionCache = emotionClientCache,
	pageProps,
}: MainAppProps) {
	const Layout: LayoutComponent =
		Component.layout || (({ children }) => <>{children}</>);

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Job Search</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}

Bootstrap.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);
	return {
		...appProps,
	};
};

export default Bootstrap;
