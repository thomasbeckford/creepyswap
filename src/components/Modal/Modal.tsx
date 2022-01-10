import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'

// import Heading from "../../components/Heading/Heading";
import { ArrowBackIcon, CloseIcon } from '../../../public/svg'
import Flex from '../Box/Flex'
import { IconButton } from '../Button'
import { StyledModal, ModalHeader, ModalTitle } from './styled'

interface Props {
  title: string
  hideCloseButton?: boolean
  onBack?: () => void
  bodyPadding?: string
  onDismiss?: () => void
}

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = '24px',
}) => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<any>()

  useClickOutside(modalRef, () => {
    if (open) setOpen(false)
  })

  return (
    <motion.div
      style={{ width: '50%', margin: '0 auto' }}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      ref={modalRef}
    >
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
    </motion.div>
  )
}
export default Modal
