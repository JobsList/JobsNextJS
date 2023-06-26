import theme from "@/theme";
import createEmotionCache from "@/theme/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content={theme.palette.primary.main} />
					{/** TODO: add favicon here */}
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Anek+Latin:wght@400;500;600;700&display=swap"
					/>
					<meta name="emotion-insertion-point" content="" />
					{(this.props as any).emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;

	// You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App: any) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);
	// This is important. It prevents Emotion to render invalid HTML.
	// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style: any) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
	};
};
