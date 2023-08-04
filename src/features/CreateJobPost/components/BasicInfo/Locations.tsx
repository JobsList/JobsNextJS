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

	const { locations } = payload;

	return (
		<TagsInput
			values={locations}
			onChange={(locations) => {
				dispatch(setJobPostPayload({ ...payload, locations }));
			}}
			options={countryList}
			placeholder="Job is restricted to locations? "
			getOptionLabel={(option) => `${option.emoji} ${option.name}`}
		/>
	);
};

export default Locations;
