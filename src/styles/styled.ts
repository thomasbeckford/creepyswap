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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin: 0 auto;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`

const TitleContainer = styled.div`
  margin: 50px;
  text-align: center;
  color: #2e8bc0;
`

export {
  HomeContainer,
  PageContent,
  CardContainer,
  Title,
  Subtitle,
  TitleContainer,
}
