import { Stack, TextField } from "@mui/material";
import React from "react";
import { SideProjects } from "../../ducks/edit_profile.state";
import DateInput from "@/components/DateInput";

type Props = {
	onChange?: (proj: SideProjects) => void;
	proj: SideProjects;
};

const SideProjectRow: React.FC<Props> = ({ proj, onChange = () => {} }) => {
	return (
		<Stack alignItems="center" flexWrap="wrap" direction="row" mt={20}>
			<DateInput
				value={proj.start_date}
				label="year start"
				slotProps={{
					textField: {
						size: "small",
					},
				}}
				sx={{ width: "16%" }}
				onChange={(date) => onChange?.({ ...proj, start_date: date })}
			/>
			&nbsp; - &nbsp;
			<DateInput
				value={proj.end_date}
				label="year end"
				slotProps={{
					textField: {
						size: "small",
					},
				}}
				sx={{ width: "16%" }}
				onChange={(date) => onChange?.({ ...proj, end_date: date })}
			/>
			&nbsp;
			<TextField
				value={proj.project_name}
				placeholder="project name"
				size="small"
				sx={{ width: "20%" }}
				onChange={(e) => onChange({ ...proj, project_name: e.target.value })}
			/>
			&nbsp;
			<TextField
				value={proj.link}
				placeholder="url"
				size="small"
				sx={{ width: "20%" }}
				onChange={(e) => onChange({ ...proj, link: e.target.value })}
			/>
		</Stack>
	);
};

export default SideProjectRow;
