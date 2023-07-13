import theme from "@/theme";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";

type InputProps = TextFieldProps & {
	theme?: typeof theme;
	placeholderOpacity?: number;
	placeholderColor?: string;
};

const Input = styled(TextField)<InputProps>(
	({ theme, placeholderColor = null, placeholderOpacity = 1 }) => ({
		"& .MuiInputBase-root": {
			borderRadius: theme.shape.borderRadius * 4,
			backgroundColor: theme.palette.extra.white,
			marginTop: theme.spacing(15),
			alignSelf: "center",
			fontSize: 18,
			fontWeight: theme.typography.fontWeightBold,
		},
		"& input": {
			"&::placeholder": {
				color: placeholderColor || theme.palette.extra.black,
				opacity: placeholderOpacity,
			},
		},
	})
);

export default Input;
