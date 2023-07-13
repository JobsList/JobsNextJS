import { Typography, styled } from "@mui/material";

const Subtitle2 = styled(Typography)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightBold,
	fontSize: theme.typography.fontSize * 1.5,
}));

export default Subtitle2;
