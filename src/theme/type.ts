type ExtraColorPalette = {
	black: string;
	white: string;
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
