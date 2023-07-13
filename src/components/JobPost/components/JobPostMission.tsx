/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";
import React from "react";
import Subtitle1 from "../../Subtitle1";
import Subtitle2 from "../../Subtitle2";

const JobPostMission = () => {
	return (
		<>
			<Subtitle1>Role Mission</Subtitle1>

			<Typography mt={8}>
				Further Klu's success by designing, developing, and launching innovative
				features and eventually new products that meet the needs of our
				customers.
			</Typography>

			<Subtitle2 mt={10}>Key metrics that this role will move</Subtitle2>

			<Typography>
				<ul>
					<li>Adoption and retention of product capabilities (quant)</li>
					<li>Adoption and retention of product capabilities (quant)</li>
				</ul>
			</Typography>

			<Subtitle2 mt={10}>
				Competencies crucial to the success of this role include
			</Subtitle2>
			<Typography>
				<ul>
					<li>Ship high impact/quality web applications that move metrics</li>
					<li>
						Understand market problems and needs to ship qualitatively better
						solutions
					</li>
					<li>
						Collaborate, lead, and support team members on the path to achieving
						project objectives
					</li>
					<li>
						Prioritize and manage competing demands, communicating tradeoffs
					</li>
				</ul>
			</Typography>
		</>
	);
};

export default JobPostMission;
