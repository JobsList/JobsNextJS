import { createTheme } from "@mui/material";

const theme = createTheme({
	typography: {
		fontSize: 12,
		fontWeightBold: 700,
		fontWeightMedium: 600,
		fontWeightLight: 500,
		fontWeightRegular: 400,
	},
	palette: {
		extra: {
			black: "#000000",
			blackLight: "#222122",
			white: "#ffffff",
			grey: "#E8E8E8",
			greyLight: "#00000080",
			greyLightest: "#000000BF",
			backgroundColor: "#F7F7F7",
			blackLightest: "#00000040",
			green: "#7CC08B",
			greybtn: "#DCDCDC",
			greenTag: "#23d101",
		},
		primary: {
			light: "#8e12b4",
			main: "#7c0dae",
			dark: "#5a06a3",
		},
		secondary: {
			light: "#830091",
			main: "#73008a",
			dark: "#56007d",
		},
	},
	shape: {
		borderRadius: 8,
	},
	spacing: 2,
});

export default theme;
