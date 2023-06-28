import React, { useState } from "react";
import TagsInput from "../../../../components/TagsInput";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const Tags: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);

	const { tags } = payload;

	return (
		<TagsInput
			values={tags}
			onChange={(t) => dispatch(setJobPostPayload({ ...payload, tags: t }))}
			options={["a", "b", "c"]}
			placeholder="TAGS, KEYWORDS OR STACKS"
		/>
	);
};

export default Tags;
