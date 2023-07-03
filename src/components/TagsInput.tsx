import {
	Autocomplete,
	AutocompleteChangeDetails,
	AutocompleteChangeReason,
	Box,
	TextField,
} from "@mui/material";
import React from "react";
import InputLabel from "./InputLabel";

type TagsInputProps = {
	options?: Array<any>;
	values?: Array<any>;
	placeholder?: string;
	onChange?: (values: Array<any>) => void;
	getOptionLabel?: (option: any) => string;
};

const TagsInput: React.FC<TagsInputProps> = ({
	options = [],
	values = [],
	placeholder = "",
	onChange = (values) => {},
	getOptionLabel,
}) => {
	return (
		<Box component="div">
			<InputLabel>{placeholder}</InputLabel>
			<Autocomplete
				disableCloseOnSelect
				multiple
				value={values}
				options={options}
				getOptionLabel={getOptionLabel}
				onChange={(_, v) => onChange(v)}
				renderInput={(params) => (
					<TextField
						{...params}
						InputProps={{
							...params.InputProps,
							endAdornment: null,
						}}
						placeholder={placeholder}
					/>
				)}
			/>
		</Box>
	);
};

export default TagsInput;
