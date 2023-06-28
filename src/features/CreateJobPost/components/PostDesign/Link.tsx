import React from "react";
import CustomLink from "@/components/Link";
import { styled } from "@mui/material";

const Link = styled(CustomLink)(({ theme }) => ({
	color: theme.palette.primary.main,
	borderColor: theme.palette.primary.main,
}));

export default Link;
