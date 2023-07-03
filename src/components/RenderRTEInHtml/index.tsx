import { Box, Typography } from "@mui/material";
import { ContentBlock, ContentState } from "draft-js";
import { Options, stateToHTML } from "draft-js-export-html";
import React, { useEffect } from "react";

type RenderRTEInHtmlProps = {
	state: ContentState;
};

const options: Options = {
	inlineStyles: {},
	blockRenderers: {},
	entityStyleFn: (entity) => {
		const type = entity.getType();
		console.log("type ==> ", type);

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
	let html = stateToHTML(props.state, options);

	return <Box component="div" dangerouslySetInnerHTML={{ __html: html }}></Box>;
};

export default RenderRTEInHtml;
