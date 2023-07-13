import { styled } from "@mui/material";
import Link from "./Link";

const LinkButton = styled(Link)(({ theme }) => ({
	borderBottom: 0,
	display: "flex",
	alignItems: "center",
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.extra.white,
	padding: theme.spacing(5, 10),
	borderRadius: theme.shape.borderRadius,
}));

export default LinkButton;
