import { Typography, styled } from "@mui/material";

const Text = styled(Typography)(({ theme }) => ({
	color: theme.palette.common.black,
	fontSize: theme.typography.fontSize * 1.25,
}));

export default Text;
