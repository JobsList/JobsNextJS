import CheckboxWithBoost from "@/components/CheckboxWithBoost";
import Text from "@/components/Text";
import QRCodeSvg from "@/icons/QRCodeSvg";
import React from "react";
import Link from "./Link";
import { useAppDispatch, useAppSelect } from "@/hooks/useRedux";
import { setJobPostPayload } from "../../ducks/createJobPost.reducer";

const QRCode: React.FC = () => {
	const dispatch = useAppDispatch();
	const { payload } = useAppSelect((state) => state.create_job);
	const { post_design } = payload;

	return (
		<CheckboxWithBoost
			checked={post_design.qr_code}
			labelText={
				<Text sx={{ display: "flex", alignItems: "center" }}>
					Create a <QRCodeSvg sx={{ color: "bw.black" }} />
					QR-code short link for your post like&nbsp;
					<Link href="/">rok.co/f4</Link>
				</Text>
			}
			onChange={(checked) =>
				dispatch(
					setJobPostPayload({
						...payload,
						post_design: { ...post_design, qr_code: checked },
					})
				)
			}
		/>
	);
};

export default QRCode;
