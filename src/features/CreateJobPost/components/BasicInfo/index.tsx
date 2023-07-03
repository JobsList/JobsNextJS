import React from "react";
import { Stack } from "@mui/material";
import CardWithTitle from "@/components/CardWithTitle";

import CompanyName from "./CompanyName";
import Position from "./Position";
import PositionType from "./PositionType";
import Tags from "./Tags";
import Locations from "./Locations";

const BasicInfo = () => {
	return (
		<CardWithTitle title="Let's start">
			<Stack spacing={10}>
				<CompanyName />
				<Position />
				<PositionType />
				<Tags />
				<Locations />
			</Stack>
		</CardWithTitle>
	);
};

export default BasicInfo;
