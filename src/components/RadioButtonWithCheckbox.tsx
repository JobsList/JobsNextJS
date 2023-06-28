import {
	Checkbox,
	Stack as MUIStack,
	Radio,
	styled,
	useRadioGroup,
} from "@mui/material";
import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import BoostTag from "./BoostTag";

const Stack = styled(MUIStack)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
		alignItems: "flex-start",
		margin: theme.spacing(4, "auto"),
	},
}));

const Label = styled("label")(({ theme }) => ({
	"&:hover": {
		opacity: 0.7,
		cursor: "pointer",
	},
}));

type CheckboxWithBoostProps = {
	onChange?: (checked: boolean) => void;
	value?: string;
	labelText?: React.ReactNode;
	boost?: number;
	checked?: boolean;
};

const RadioButtonWithCheckbox: React.FC<CheckboxWithBoostProps> = ({
	labelText = <></>,
	boost,
	onChange,
	checked,
	value,
}) => {
	const radioGroup = useRadioGroup();
	const id = Math.random() * 10000;

	let _checked = checked;
	if (radioGroup) {
		_checked = radioGroup.value === value;
	}

	return (
		<MUIStack direction="row" alignItems="center">
			<Radio
				checked={_checked}
				value={value}
				onChange={(_, checked) => onChange?.(checked)}
				size="medium"
				id={`checkbox ${id}`}
				checkedIcon={<CheckBoxOutlineBlankIcon />}
				icon={<CheckBoxIcon />}
			/>
			<Label htmlFor={`checkbox ${id}`}>
				<Stack direction="row" alignItems="center">
					{labelText}
					{boost && <BoostTag boostText={`${boost}x more views`} />}
				</Stack>
			</Label>
		</MUIStack>
	);
};

export default RadioButtonWithCheckbox;
