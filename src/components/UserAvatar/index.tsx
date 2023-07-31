import { User } from "@/types/User";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
	Avatar,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
} from "@mui/material";
import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "../Link";

type UserAvatarProps = {
	user: User;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
	const router = useRouter();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	if (!user) {
		return <></>;
	}

	return (
		<React.Fragment>
			<Tooltip title="Account settings">
				<IconButton
					size="small"
					onClick={handleClick}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					sx={{ ml: 2 }}
				>
					<Avatar
						sx={{ width: 32, height: 32 }}
						src={user.user?.profile?.photo || ""}
					>
						{user.user?.email?.substring(0, 1)}
					</Avatar>
				</IconButton>
			</Tooltip>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				{/** TODO: Need to change this route to dynamic route. but first user has to update his profile */}
				<Link href="/@123">
					<MenuItem>
						<ListItemIcon>
							<AccountCircleIcon fontSize="small" />
						</ListItemIcon>
						Profile
					</MenuItem>
				</Link>
				<MenuItem onClick={() => signOut()}>
					<ListItemIcon>
						<LogoutIcon fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
};

export default UserAvatar;
