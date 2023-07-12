import React from "react";
import Button from "@/components/Button";
import SideProjectRow from "./SideProjectRow";

const SideProject: React.FC = () => {
	return (
		<>
			<SideProjectRow />

			<Button
				variant="contained"
				sx={{ marginTop: (theme) => theme.spacing(10) }}
			>
				Add a new row
			</Button>
		</>
	);
};

export default SideProject;
