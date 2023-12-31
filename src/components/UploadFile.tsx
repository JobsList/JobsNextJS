import React, { useRef, useState } from "react";
import { Avatar, Box, Typography, styled } from "@mui/material";
import getBase64 from "@/utils/getBase64";

const UploadSection = styled(Box)(({ theme }) => ({
	width: theme.spacing(70),
	height: theme.spacing(70),
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: "extra.grey",
	borderRadius: theme.shape.borderRadius * 10,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	overflow: "hidden",
}));

type UploadFileProps = {
	file?: string;
	onChange?: (file?: string) => void;
};

const UploadFile: React.FC<UploadFileProps> = ({ file, onChange }) => {
	const [logo, setLogo] = useState<string | undefined>(() => file);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (!inputRef.current) return;

		inputRef?.current?.click();
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e?.target?.files?.length) return;

		const file = e.target.files[0];
		getBase64(file, (base64) => {
			setLogo(base64?.toString());
			onChange?.(base64?.toString());
		});
	};

	return (
		<Box component="div">
			<UploadSection
				component="div"
				sx={{
					pointerEvents: "visible",
					"&:hover": {
						cursor: "pointer",
					},
				}}
				onClick={handleClick}
			>
				{logo ? (
					<Avatar
						sx={{
							width: (theme) => theme.spacing(70),
							height: (theme) => theme.spacing(70),
							objectFit: "contain",
						}}
						src={logo}
					/>
				) : (
					<Typography>Upload</Typography>
				)}
			</UploadSection>
			<input
				style={{ display: "none" }}
				accept=".png,.jpg,.jpeg"
				type="file"
				onChange={handleOnChange}
				ref={inputRef}
			/>
		</Box>
	);
};

export default UploadFile;
