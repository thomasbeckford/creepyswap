import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.cardShadow};
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
  width: 100%;
  min-height: auto;
  padding: 1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.cardBackground};
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: lighter;
  color: slategray;
`;

export const Description = styled.p`
  color: darkgray;
`;
