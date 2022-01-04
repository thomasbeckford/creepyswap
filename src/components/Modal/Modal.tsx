import React from 'react';

// import Heading from "../../components/Heading/Heading";
import Flex from '../../components/Box/Flex';
import { ArrowBackIcon, CloseIcon } from '../../../public/svg';
import { IconButton } from '../../components/Button';
import { StyledModal, ModalHeader, ModalTitle } from './styled';

interface Props {
	title: string;
	hideCloseButton?: boolean;
	onBack?: () => void;
	bodyPadding?: string;
	onDismiss?: () => void;
}

const Modal: React.FC<Props> = ({
	title,
	onDismiss,
	onBack,
	children,
	hideCloseButton = false,
	bodyPadding = '24px',
}) => (
	<StyledModal>
		<ModalHeader>
			<ModalTitle>
				{onBack && (
					<IconButton
						variant="text"
						onClick={onBack}
						area-label="go back"
						mr="8px"
					>
						<ArrowBackIcon color="primary" />
					</IconButton>
				)}
				<div>{title}</div>
			</ModalTitle>
			{!hideCloseButton && (
				<IconButton
					variant="text"
					onClick={onDismiss}
					aria-label="Close the dialog"
				>
					<CloseIcon color="primary" />
				</IconButton>
			)}
		</ModalHeader>
		<Flex flexDirection="column" p={bodyPadding}>
			{children}
		</Flex>
	</StyledModal>
);

export default Modal;
