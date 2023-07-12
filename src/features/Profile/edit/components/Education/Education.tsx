import React from "react";
import EmploymentRow from "./EducationRow";
import Button from "@/components/Button";

const Education: React.FC = () => {
	return (
		<>
			<EmploymentRow />

			<Button
				variant="contained"
				sx={{ marginTop: (theme) => theme.spacing(10) }}
			>
				Add a new row
			</Button>
		</>
	);
};

export default Education;
