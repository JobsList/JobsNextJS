import React, { useCallback, useEffect } from "react";
import EmploymentRow from "./EducationRow";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { Education, Profile } from "../../ducks/edit_profile.state";
import { setEducation } from "../../ducks/educations/educations.reducer";

type Props = {
	user: any;
	profile: Profile;
};

const Education: React.FC<Props> = ({ user, profile }) => {
	const newEd: Education = {
		start_date: new Date(),
		end_date: new Date(),
		title: "",
		school: "",
		link: "",
		profile_id: profile?.id || 0,
		user_id: parseInt(user?.user?.id || "0"),
	};

	const dispatch = useAppDispatch();
	const { educations } = useAppSelect((state) => state.educations);

	const onChange = useCallback(
		(education: Education, index: number) => {
			const _educationsList = [...educations];
			education.profile_id = +`${profile?.profile_id}`;
			education.user_id = +`${user?.user?.id}`;
			_educationsList[index] = education;

			dispatch(setEducation(_educationsList));
		},
		[dispatch, educations, profile?.profile_id, user?.user?.id]
	);

	useEffect(() => {
		if (profile && profile.education) {
			dispatch(setEducation(profile.education));
		}
	}, [dispatch, profile]);

	return (
		<>
			{educations.map((ed, idx) => (
				<EmploymentRow
					key={ed.title + idx}
					education={ed}
					onChange={(e) => onChange(e, idx)}
				/>
			))}

			<Button
				variant="contained"
				sx={{ marginTop: (theme) => theme.spacing(10) }}
				onClick={() => {
					dispatch(setEducation([...educations, newEd]));
				}}
			>
				Add a new row
			</Button>
		</>
	);
};

export default Education;
