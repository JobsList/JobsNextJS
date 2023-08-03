import React, { useCallback, useEffect } from "react";
import Button from "@/components/Button";
import SideProjectRow from "./SideProjectRow";
import { Profile, SideProjects } from "../../ducks/edit_profile.state";
import useAuth from "@/hooks/useAuth";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setSideProjects } from "../../ducks/sideProjects/sideProjects.reducer";

type Props = {
	profile: Profile;
};

const SideProject: React.FC<Props> = ({ profile }) => {
	const { user }: any = useAuth();

	const newProj: SideProjects = {
		start_date: new Date(),
		end_date: new Date(),
		project_name: "",
		link: "",
		profile_id: profile?.id || 0,
		user_id: parseInt(user?.user?.id || "0"),
	};

	const dispatch = useAppDispatch();
	const { sideProjects } = useAppSelect((state) => state.side_projects);

	const onChange = useCallback(
		(proj: SideProjects, index: number) => {
			const _projectList = [...sideProjects];
			proj.profile_id = +`${profile?.profile_id}`;
			proj.user_id = +`${user?.user?.id}`;
			_projectList[index] = proj;

			dispatch(setSideProjects(_projectList));
		},
		[dispatch, sideProjects, profile?.profile_id, user?.user?.id]
	);

	useEffect(() => {
		if (profile && profile.side_projects) {
			dispatch(setSideProjects(profile.side_projects));
		}
	}, [dispatch, profile]);
	return (
		<>
			{sideProjects?.map?.((prj, idx) => (
				<SideProjectRow
					key={prj.project_name + idx}
					proj={prj}
					onChange={(p) => onChange(p, idx)}
				/>
			))}

			<Button
				variant="contained"
				sx={{ marginTop: (theme) => theme.spacing(10) }}
				onClick={() => {
					dispatch(setSideProjects([...sideProjects, newProj]));
				}}
			>
				Add a new row
			</Button>
		</>
	);
};

export default SideProject;
