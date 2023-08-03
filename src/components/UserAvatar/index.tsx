import { User } from "@/types/User";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
	Avatar,
	Button,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "../Link";
import httpClient from "@/lib/config/http";
import useAuth from "@/hooks/useAuth";

type UserAvatarProps = {
	user: User;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
	const [loading, setLoading] = useState<boolean>(() => false);
	const { user: userData } = user;
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

	let profileLink = "";

	if (userData?.profile && userData?.profile?.username) {
		profileLink = `/@${userData?.profile?.username}`;
	} else {
		profileLink = `/@${userData?.email}`;
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
				<Link href={`${profileLink}`}>
					<MenuItem>
						<ListItemIcon>
							<AccountCircleIcon fontSize="small" />
						</ListItemIcon>
						Profile
					</MenuItem>
				</Link>
				<MenuItem
					onClick={async () => {
						if (loading) {
							return;
						}

						setLoading(true);
						// Logout user out from our server
						const { response } = await httpClient({
							method: "GET",
							path: {
								url: "LOGOUT",
								params: {
									id: userData?.id,
								},
							},
							token: user?.accessToken || "",
						});

						if (response?.data) {
							signOut();
						}
						setLoading(false);
					}}
				>
					<ListItemIcon>
						<LogoutIcon fontSize="small" />
					</ListItemIcon>
					{loading ? "loading..." : "Logout"}
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
};

export default UserAvatar;
