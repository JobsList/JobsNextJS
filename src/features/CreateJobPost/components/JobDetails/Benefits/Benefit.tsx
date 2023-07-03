import { Button } from "@mui/material";
import React, { useState } from "react";

export type BenefitType = {
	value: string;
	title: string;
};

type BenefitProps = {
	benefit: BenefitType;
	onClick?: (benefit: BenefitType) => void;
	isActive?: boolean;
};

const Benefit: React.FC<BenefitProps> = ({ benefit, onClick, isActive }) => {
	const [active, setActive] = useState<boolean>(() => isActive || false);

	const onSelect = () => {
		setActive(!active);

		onClick?.(benefit);
	};

	return (
		<Button
			disableElevation
			variant={active ? "contained" : "outlined"}
			onClick={() => onSelect()}
			sx={{
				"&:hover": !active
					? {
							backgroundColor: "primary.main",
							color: "white",
							opacity: 0.8,
					  }
					: {},
			}}
		>
			{benefit.title}
		</Button>
	);
};

export default Benefit;
