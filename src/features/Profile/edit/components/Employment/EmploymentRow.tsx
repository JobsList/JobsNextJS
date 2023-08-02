import { Stack, TextField } from "@mui/material";
import React from "react";
import { Employment } from "../../ducks/edit_profile.state";
import DateInput from "@/components/DateInput";

type Props = {
	onChange?: (emp: Employment) => void;
	emp: Employment;
};

const EmploymentRow: React.FC<Props> = ({ emp, onChange = () => {} }) => {
	return (
		<Stack alignItems="center" flexWrap="wrap" direction="row" mt={20}>
			<DateInput
				value={emp.start_date}
				label="year start"
				slotProps={{
					textField: {
						size: "small",
					},
				}}
				sx={{ width: "16%" }}
				onChange={(date) => onChange?.({ ...emp, start_date: date })}
			/>
			&nbsp; - &nbsp;
			<DateInput
				value={emp.end_date}
				label="year end"
				slotProps={{
					textField: {
						size: "small",
					},
				}}
				sx={{ width: "16%" }}
				onChange={(date) => onChange?.({ ...emp, end_date: date })}
			/>
			&nbsp;
			<TextField
				value={emp.title}
				placeholder="title"
				size="small"
				sx={{ width: "20%" }}
				onChange={(e) => onChange?.({ ...emp, title: e.target.value })}
			/>
			&nbsp; @ &nbsp;
			<TextField
				value={emp.company}
				placeholder="company"
				size="small"
				sx={{ width: "20%" }}
				onChange={(e) => onChange?.({ ...emp, company: e.target.value })}
			/>
			&nbsp;
			<TextField
				value={emp.link}
				placeholder="https://"
				size="small"
				sx={{ width: "20%" }}
				onChange={(e) => onChange?.({ ...emp, link: e.target.value })}
			/>
		</Stack>
	);
};

export default EmploymentRow;
