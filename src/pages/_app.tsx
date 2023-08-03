import { LayoutComponent } from "@/layouts";
import store from "@/lib/redux";
import theme from "@/theme";
import createEmotionCache from "@/theme/createEmotionCache";
import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

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
	pageProps: { session, ...pageProps },
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
				<meta charSet="utf-8" />
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Layout>
						<SessionProvider session={session}>
							<Component {...pageProps} />
						</SessionProvider>
					</Layout>
				</ThemeProvider>
			</Provider>
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
