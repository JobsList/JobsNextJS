import React, { useState } from "react";
import TagsInput from "../../../components/TagsInput";

const Tags: React.FC = () => {
	const [tags, setTags] = useState<Array<any>>(() => []);
	return (
		<TagsInput
			values={tags}
			onChange={(t) => setTags(t)}
			options={["a", "b", "c"]}
			placeholder="TAGS, KEYWORDS OR STACKS"
		/>
	);
};

export default Tags;
