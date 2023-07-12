import { Stack } from "@mui/material";
import React from "react";
import Link from "../Link";
import RenderUserOrLogin from "./RenderUserOrLogin";
import { User } from "@/types/User";

type PageMainHeaderProps = {
	user: User;
};

const PageMainHeader: React.FC<PageMainHeaderProps> = ({ user }) => {
	return (
		<Stack
			direction="row"
			justifyContent="flex-end"
			alignItems="center"
			spacing={5}
			sx={{ width: "100%" }}
			mt={5}
		>
			<Link
				sx={{
					border: 0,
					backgroundColor: "primary.main",
					color: "extra.white",
					padding: (theme) => theme.spacing(4, 7),
					borderRadius: (theme) => theme.shape.borderRadius / 6,
				}}
				href="/create-job"
			>
				Post a remote job
			</Link>
			<RenderUserOrLogin user={user} />
		</Stack>
	);
};

export default PageMainHeader;
