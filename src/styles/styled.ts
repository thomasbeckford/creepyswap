import styled from 'styled-components'

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr;
  justify-items: center;
`

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`

export { HomeContainer, PageContent }
