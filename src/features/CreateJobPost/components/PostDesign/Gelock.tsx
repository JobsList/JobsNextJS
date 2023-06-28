/* eslint-disable react/no-unescaped-entities */
import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";
import React from "react";

const Gelock = () => {
	return (
		<CheckboxWithBoost
			labelText={
				<Text>
					Geolock your post for people only in the location it's restricted to
					above and block applicants from elsewhere (+$89)
				</Text>
			}
		/>
	);
};

export default Gelock;
