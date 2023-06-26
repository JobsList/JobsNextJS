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
			white: "#ffffff",
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
