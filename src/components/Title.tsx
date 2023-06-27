import { Typography, styled } from "@mui/material";

const Title = styled(Typography)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightBold,
	fontSize: theme.typography.fontSize * 2.5,
}));

export default Title;
