import React, { useState } from "react";
import TagsInput from "../../../components/TagsInput";

const Locations = () => {
	const [tags, setTags] = useState<Array<any>>(() => []);
	return (
		<TagsInput
			values={tags}
			onChange={(t) => setTags(t)}
			options={["a", "b", "c"]}
			placeholder="Job is restricted to locations? "
		/>
	);
};

export default Locations;
