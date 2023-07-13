/* eslint-disable react/no-unescaped-entities */
import { Typography, styled } from "@mui/material";
import React from "react";

const HighLightText = styled("b")(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.extra.white,
}));

const LegalSalaryNote = () => {
	return (
		<Typography mt={10} mb={10}>
			<HighLightText style={{ backgroundColor: "primary." }}>
				It's illegal to not share salary range on job posts since 2021.
			</HighLightText>{" "}
			Posts without salary will automatically show an estimate of salary based
			on similar jobs. Remote job postings are legally required to show a salary
			compensation range in many U.S. states and countries. Google does NOT
			index jobs without salary data. If it's a short-term gig, use the annual
			full-time equivalent. For example, if it's a 2-week project for $2,000,
			the annual equivalent would be $2,000 / 2 weeks * 52 weeks = $52,000.
			Please use USD equivalent. We don't have currency built-in yet and we'd
			like to use this salary data to show salary trends in remote work. Remote
			OK is a supporter of #OpenSalaries.
		</Typography>
	);
};

export default LegalSalaryNote;
