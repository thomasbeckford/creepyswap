import styled from 'styled-components'

import { Flex } from '../Box'

export const StyledModal = styled.div`
  background: ${({ theme }) => theme.colors.modalBackground};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),
    0px 1px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.modalBackground};
  border-radius: 32px;
  width: 100%;
  z-index: 1;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9eaeb;
  align-items: center;
  padding: 12px 24px;
`

export const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`
