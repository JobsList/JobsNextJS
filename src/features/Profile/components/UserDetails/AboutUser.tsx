import { Typography } from "@mui/material";
import React from "react";

const AboutUser: React.FC = () => {
	return (
		<Typography mt={10} component="p" sx={{ whiteSpace: "pre-wrap" }}>
			Experienced and versatile software developer with a strong expertise in
			Node.js, React.js, React Native, JavaScript, and Docker. With a solid
			background in full-stack development, I possess a deep understanding of
			building robust and scalable applications across various platforms.
			<br /> <br />
			In Node.js, I have leveraged its event-driven architecture and extensive
			package ecosystem to develop high-performance and efficient server-side
			applications. I have hands-on experience in building RESTful APIs,
			integrating with databases, and implementing real-time communication using
			technologies like Socket.io.
			<br /> <br /> As a proficient React.js developer, I have built responsive
			and dynamic user interfaces, employing state management libraries like
			Redux, Redux Thunk and Redux Saga to ensure optimal performance. I have a
			solid understanding of front-end development principles, including
			component-based architecture, virtual DOM, and JSX syntax. Additionally,
			my expertise extends to React Native, enabling me to develop
			cross-platform mobile applications with a single codebase.
		</Typography>
	);
};

export default AboutUser;
