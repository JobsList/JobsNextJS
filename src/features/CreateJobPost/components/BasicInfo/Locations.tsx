import TagsInput from "@/components/TagsInput";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

import countryList from "@/utils/countryList.json";

const worldWide = {
	name: "Worldwide",
	emoji: "🌏",
};

const Locations = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { location } = payload;

	return (
		<TagsInput
			values={location}
			onChange={(locations) => {
				dispatch(setJobPostPayload({ ...payload, location: locations }));
			}}
			options={countryList}
			placeholder="Job is restricted to locations? "
			getOptionLabel={(option) => `${option.emoji} ${option.name}`}
		/>
	);
};

export default Locations;
