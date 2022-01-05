import styled from 'styled-components'

export const Switch = styled.div<{ isOn: boolean }>`
  width: 50px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors?.ciTrans15};
  display: flex;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 5px 8px;
  cursor: pointer;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  align-items: center;
  margin-left: 40px;

  .handle {
    width: 24px;
    height: 24px;
    background-color: ${({ isOn, theme }) =>
      isOn ? theme.colors.dangerBorder : theme.colors.danger};
    border-radius: 5px;
  }
`
