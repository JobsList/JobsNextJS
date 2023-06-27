import React from "react";
import { Autocomplete, autocompleteClasses } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Input from "../../Input";
import { SvgIconType } from "@/icons/SvgIconType";

type AutoCompleteProps = {
	placeholder?: string;
	StartIcon?: SvgIconType;
	value?: any;
	options: Array<any>;
};

const AutoComplete: React.FC<AutoCompleteProps> = ({
	placeholder = "",
	StartIcon = null,
	value = null,
	options,
}) => {
	return (
		<Autocomplete
			options={options}
			value={value}
			getOptionLabel={(option) => String(option.title)}
			sx={{
				[`&& .${autocompleteClasses.inputRoot}`]: {
					paddingRight: "15px !important",
					paddingLeft: "15px !important",
					paddingTop: 0,
					paddingBottom: 0,
					marginTop: 0,
				},
				[`&& .MuiOutlinedInput-root`]: {
					padding: (theme) => theme.spacing(1.5),
					fontSize: 14,
				},
			}}
			renderInput={(inputPrams) => (
				<Input
					{...inputPrams}
					placeholder={placeholder}
					InputProps={{
						...inputPrams.InputProps,
						startAdornment: StartIcon ? (
							<StartIcon sx={{ fontSize: 20, color: "extra.greyLight" }} />
						) : null,
						endAdornment: (
							<KeyboardArrowDownIcon sx={{ margin: 0, padding: 0 }} />
						),
					}}
					fullWidth
				/>
			)}
		/>
	);
};

export default AutoComplete;
