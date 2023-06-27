type ExtraColorPalette = {
	black: string;
	blackLight: string;
	white: string;
	grey: string;
	greyLight: string;
	greyLightest: string;
	backgroundColor: string;
	blackLightest: string;
	green: string;
	greybtn: string;
	greenTag: string;
	// add more extra colors here
};

declare module "@mui/material/styles" {
	interface PaletteColorOptions {
		light: string;
		main: string;
		dark: string;
	}

	interface PaletteColor {
		light: string;
		main: string;
		dark: string;
	}

	interface SimplePaletteColorOptions {
		light?: string;
		main: string;
		dark?: string;
	}

	interface PaletteOptions {
		extra: ExtraColorPalette;
	}

	interface Palette {
		extra: ExtraColorPalette;
	}
}

export {};
