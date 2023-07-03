import React from "react";
import { Button as MUIButton, styled } from "@mui/material";
import { ButtonProps as MUIButtonProps } from "@mui/material/Button";

const ApplyDummy = styled(MUIButton)(({ theme }) => ({
	backgroundColor: "transparent",
	opacity: 0.6,
	pointerEvents: "none",
	borderStyle: "dashed",
}));

type ButtonProps = MUIButtonProps & {
	preview?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
	if (props.preview) {
		return <ApplyDummy {...props} />;
	}

	return <MUIButton {...props} />;
};

export default Button;
