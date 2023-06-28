import TagsInput from "@/components/TagsInput";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import React, { useState } from "react";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const Locations = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { location } = payload;

	return (
		<TagsInput
			values={location}
			onChange={(locations) =>
				dispatch(setJobPostPayload({ ...payload, location: locations }))
			}
			options={["a", "b", "c"]}
			placeholder="Job is restricted to locations? "
		/>
	);
};

export default Locations;
