import { Box, Typography } from "@mui/material";
import { ContentState } from "draft-js";
import { Options, stateToHTML } from "draft-js-export-html";
import React, { useMemo } from "react";

type RenderRTEInHtmlProps = {
	state: ContentState;
};

const options: Options = {
	inlineStyles: {},
	blockRenderers: {},
	entityStyleFn: (entity) => {
		const type = entity.getType();
		if (type === "p") {
			const data = entity.getData();
			return {
				element: "Typography",
				style: {},
			};
		}
	},
};

const RenderRTEInHtml: React.FC<RenderRTEInHtmlProps> = (props) => {
	const state = useMemo(() => props.state, [props]);
	let html = state ? stateToHTML(state, options) : <></>;

	return (
		<Box
			component="div"
			dangerouslySetInnerHTML={{
				__html: html || <Typography>No Content.</Typography>,
			}}
		></Box>
	);
};

export default RenderRTEInHtml;
