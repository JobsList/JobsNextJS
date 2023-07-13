import React from "react";
import EmploymentRow from "./EmploymentRow";
import Button from "@/components/Button";

const EmploymentInputs: React.FC = () => {
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

export default EmploymentInputs;
