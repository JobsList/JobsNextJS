import { Chip } from "@mui/material";
import React from "react";

type BoostTagProps = {
	boostText: string;
};

const BoostTag: React.FC<BoostTagProps> = ({ boostText }) => {
	return (
		<Chip
			label={boostText}
			variant="outlined"
			size="small"
			sx={{
				backgroundColor: "bw.white",
				borderRadius: (theme) => theme.shape.borderRadius - 7,
				color: "primary.main",
				borderColor: "primary.main",
				fontWeight: "bold",
				textTransform: "uppercase",
				ml: 2,
			}}
		/>
	);
};

export default BoostTag;
