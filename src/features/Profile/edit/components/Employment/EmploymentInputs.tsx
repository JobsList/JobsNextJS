import React, { useCallback, useEffect } from "react";
import EmploymentRow from "./EmploymentRow";
import Button from "@/components/Button";
import { Employment, Profile } from "../../ducks/edit_profile.state";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import useAuth from "@/hooks/useAuth";
import { setEmployment } from "../../ducks/employment/employment.reducer";

type Props = {
	profile: Profile;
};

const EmploymentInputs: React.FC<Props> = ({ profile }) => {
	const { user }: any = useAuth();

	const newEmp: Employment = {
		start_date: new Date(),
		end_date: new Date(),
		title: "",
		company: "",
		link: "",
		profile_id: profile?.id || 0,
		user_id: parseInt(user?.user?.id || "0"),
	};

	const dispatch = useAppDispatch();
	const { employment } = useAppSelect((state) => state.employments);

	const onChange = useCallback(
		(empl: Employment, index: number) => {
			const _educationsList = [...employment];
			empl.profile_id = +`${profile?.profile_id}`;
			empl.user_id = +`${user?.user?.id}`;
			_educationsList[index] = empl;

			dispatch(setEmployment(_educationsList));
		},
		[dispatch, employment, profile?.profile_id, user?.user?.id]
	);

	useEffect(() => {
		if (profile && profile.employment) {
			dispatch(setEmployment(profile.employment));
		}
	}, [dispatch, profile]);
	return (
		<>
			{employment?.map?.((emp, idx) => (
				<EmploymentRow
					key={emp.title + idx}
					emp={emp}
					onChange={(em) => onChange(em, idx)}
				/>
			))}

			<Button
				variant="contained"
				sx={{ marginTop: (theme) => theme.spacing(10) }}
				onClick={() => {
					dispatch(setEmployment([...employment, newEmp]));
				}}
			>
				Add a new row
			</Button>
		</>
	);
};

export default EmploymentInputs;
