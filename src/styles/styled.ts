import styled from 'styled-components';

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr;
  justify-items: center;
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const TitleContainer = styled.div`
  margin: 50px;
  text-align: center;
  color: #2e8bc0;
`;

export { HomeContainer, PageContent, Wrapper, Title, Subtitle, TitleContainer };
