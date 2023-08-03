import { Typography } from "@mui/material";
import React from "react";
import { Profile } from "../../edit/ducks/edit_profile.state";

type Props = {
	profile: Profile;
};

const AboutUser: React.FC<Props> = ({ profile }) => {
	return (
		<Typography mt={10} component="p" sx={{ whiteSpace: "pre-wrap" }}>
			{profile ? profile.bio : "No Info."}
		</Typography>
	);
};

export default AboutUser;
