import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import type { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

type Props = DatePickerProps<any>;

const DateInput: React.FC<Props> = (props) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker {...props} value={dayjs(props.value)} />
		</LocalizationProvider>
	);
};

export default DateInput;
