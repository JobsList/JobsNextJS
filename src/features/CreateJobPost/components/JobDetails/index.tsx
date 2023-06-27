import React from "react";
import LegalSalaryNote from "../LegalSalaryNote";
import CardWithTitle from "@/components/CardWithTitle";
import Benefits from "../Benefits";
import HowToApply from "../HowToApply";
import PostHightlight from "./PostHightlight";
import SalaryRange from "./SalaryRange";
import ApplyWith from "./ApplyWith";
import JobDescription from "./JobDescription";
import CompanyLogo from "./CompanyLogo";

const JobDetails = () => {
	return (
		<CardWithTitle title="Job Details">
			<CompanyLogo />
			<PostHightlight />
			<SalaryRange />
			<LegalSalaryNote />
			<JobDescription />
			<Benefits />
			<HowToApply />
			<ApplyWith />
		</CardWithTitle>
	);
};

export default JobDetails;
