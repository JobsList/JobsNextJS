import { Typography, styled } from "@mui/material";

const Subtitle1 = styled(Typography)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightBold,
	fontSize: theme.typography.fontSize * 1.7,
}));

export default Subtitle1;
