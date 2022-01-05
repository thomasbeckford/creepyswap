import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 0px 20px ${({ theme }) => theme.colors?.ci};
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  min-width: 400px;
  min-height: 200px;
  padding: 1rem;
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: slategray;
`

export const Description = styled.p`
  color: darkgray;
`
