import { Box, Stack } from "@mui/material";
import Benefit, { BenefitType } from "./Benefit";
import Subtitle2 from "@/components/Subtitle2";

const benefits: BenefitType[] = [
	{
		value: "401k",
		title: "💰 401k",
	},
	{
		value: "distributed-team",
		title: "🌏 Distributed Team",
	},
	{
		value: "async",
		title: "🕑 Async",
	},
	{
		value: "vision-insurance",
		title: "🤓 Vision Insurance",
	},
	{
		value: "dental-insurance",
		title: "🦷 Dental Insurance",
	},
	{
		value: "medical-insurance",
		title: "⛑️ Medical Insurance",
	},
	{
		value: "unlimited-vacations",
		title: "🏖️ Unlimited Vacations",
	},
	{
		value: "paid-time-off",
		title: "🛫 Paid Timeoff",
	},
	{
		value: "4-day-work",
		title: "🗓️ 4 day workweek",
	},
	{
		value: "401k-matching",
		title: "💰 401k Matching",
	},
	{
		value: "company-retreats",
		title: "🍩 Company Retreats",
	},
];

const Benefits: React.FC = () => {
	return (
		<Box component="div" mt={20} mb={20}>
			<Subtitle2>Benefits</Subtitle2>
			<Stack columnGap={5} rowGap={5} direction="row" flexWrap="wrap">
				{benefits.map((benefit) => (
					<Benefit key={benefit.value} benefit={benefit} />
				))}
			</Stack>
		</Box>
	);
};

export default Benefits;
