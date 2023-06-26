import { MenuItem, Select } from "@mui/material";
import React from "react";

export type OptionObjectType = {
	label?: string;
	title?: string;
	value?: string | number;
};

type SalarySelectionProps = {
	value?: any; // WE will change it to a proper value type
	onSelect?: (e: React.ChangeEvent<any>) => void;
	options?: Array<any>;
};

const getOptionTitle: React.FC = (option: OptionObjectType | string) => {
	if (typeof option === "object") {
		return option?.["label"] || option?.["title"] || "";
	}

	return option;
};

const getOptionValue = (option: OptionObjectType | string) => {
	if (typeof option === "object") {
		return option["value"] || "";
	}

	return option;
};

const SalarySelection: React.FC<SalarySelectionProps> = ({
	value,
	onSelect = (value) => {},
	options = [],
}) => {
	return (
		<Select
			fullWidth
			size="small"
			value={value}
			defaultValue={getOptionValue(options[0])}
			onChange={(e) => onSelect(e.target.value)}
			IconComponent={undefined}
		>
			{options.map((o, i) => (
				<MenuItem value={getOptionValue(o)} key={`${getOptionValue(o)}` + i}>
					{getOptionTitle(o)}
				</MenuItem>
			))}
		</Select>
	);
};

export default SalarySelection;
