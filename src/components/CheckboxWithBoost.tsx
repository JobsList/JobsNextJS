import { Checkbox, Stack as MUIStack, styled } from "@mui/material";
import React from "react";
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
	checked?: boolean;
	labelText?: React.ReactNode;
	boost?: number;
};

const CheckboxWithBoost: React.FC<CheckboxWithBoostProps> = ({
	labelText = <></>,
	boost,
	onChange,
	checked,
}) => {
	const id = Math.random() * 10000;
	return (
		<MUIStack direction="row" alignItems="center">
			<Checkbox
				checked={checked}
				onChange={(_, checked) => onChange?.(checked)}
				size="medium"
				id={`checkbox ${id}`}
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

export default CheckboxWithBoost;
