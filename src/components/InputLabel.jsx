import { InputLabel as MUIInputLabel, styled } from "@mui/material";

const InputLabel = styled(MUIInputLabel)(({ theme }) => ({
	color: theme.palette.extra.black,
	textTransform: "uppercase",
	fontWeight: theme.typography.fontWeightBold,
}));

export default InputLabel;
