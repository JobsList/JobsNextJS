import InputWithLabel from "@/components/InputWithLabel";
import React from "react";

const Position = () => {
	return (
		<InputWithLabel
			label="Position *"
			helperText={`Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please. `}
		/>
	);
};

export default Position;
