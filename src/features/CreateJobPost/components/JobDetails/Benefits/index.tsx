import { Box, Stack } from "@mui/material";
import Benefit, { BenefitType } from "./Benefit";
import Subtitle2 from "@/components/Subtitle2";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "@/features/CreateJobPost/ducks/createJobPost.reducer";

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
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { job_details } = payload;

	const isActive = (benefit: BenefitType) =>
		job_details.benefits.filter((b) => b.value === benefit.value).length > 0;

	const onClick = (benefit: BenefitType) => {
		let benefits = [...job_details.benefits];
		if (!isActive(benefit)) {
			benefits.push(benefit);
		} else {
			benefits = benefits.filter((b) => b.value !== benefit.value);
		}

		dispatch(
			setJobPostPayload({
				...payload,
				job_details: {
					...job_details,
					benefits,
				},
			})
		);
	};

	return (
		<Box component="div" mt={20} mb={20}>
			<Subtitle2>Benefits</Subtitle2>
			<Stack columnGap={5} rowGap={5} direction="row" flexWrap="wrap">
				{benefits.map((benefit) => (
					<Benefit
						key={benefit.value}
						benefit={benefit}
						isActive={isActive(benefit)}
						onClick={onClick}
					/>
				))}
			</Stack>
		</Box>
	);
};

export default Benefits;
