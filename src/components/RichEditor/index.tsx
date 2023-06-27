import dynamic from "next/dynamic";

import Loading from "../Loading";

// Run the code on client side.
const RichEditor = dynamic(import("./Editor"), {
	ssr: false,
	loading: () => <Loading visible={true} />,
});

export default RichEditor;
