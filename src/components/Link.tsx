import { styled } from "@mui/material";
import NLink from "next/link";

const Link = styled(NLink)(({ theme }) => ({
	fontWeight: theme.typography.fontWeightBold,
	color: theme.palette.common.black,
	textDecoration: "none",
	borderBottom: `2px solid ${theme.palette.common.black}`,
}));

export default Link;
