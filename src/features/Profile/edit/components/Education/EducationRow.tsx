import React, { useMemo } from "react";
import { Stack, TextField } from "@mui/material";
import { Education } from "../../ducks/edit_profile.state";
import DateInput from "@/components/DateInput";

type Props = {
	education: Education;
	onChange?: (education: Education) => void;
};

const EducationRow: React.FC<Props> = (props) => {
	const { education: _ed, onChange } = props;

	const education = useMemo(() => _ed, [_ed]);

	return (
		<Stack alignItems="center" flexWrap="wrap" direction="row" mt={20}>
			<DateInput
				value={education.start_date}
				label="year start"
				slotProps={{
					textField: {
						size: "small",
					},
				}}
				sx={{ width: "16%" }}
				onChange={(date) => onChange?.({ ...education, start_date: date })}
			/>
			&nbsp; - &nbsp;
			<DateInput
				value={education.end_date}
				label="year end"
				slotProps={{
					textField: {
						size: "small",
					},
				}}
				sx={{ width: "16%" }}
				onChange={(date) => onChange?.({ ...education, end_date: date })}
			/>
			&nbsp;
			<TextField
				value={education.title}
				placeholder="title"
				size="small"
				sx={{ width: "20%" }}
				onChange={(e) => onChange?.({ ...education, title: e.target.value })}
			/>
			&nbsp; @ &nbsp;
			<TextField
				value={education.school}
				placeholder="school"
				size="small"
				sx={{ width: "20%" }}
				onChange={(e) => onChange?.({ ...education, school: e.target.value })}
			/>
			&nbsp;
			<TextField
				value={education.link}
				placeholder="https://"
				size="small"
				sx={{ width: "20%" }}
				type="link"
				onChange={(e) => onChange?.({ ...education, link: e.target.value })}
			/>
		</Stack>
	);
};

export default EducationRow;
