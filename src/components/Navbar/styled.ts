import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  background: ${({ theme }) => theme.colors.black};
  padding: 0px 30px;
`;
export const Title = styled.h1`
  font-size: 1.3rem;
  margin: 0;
  padding: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.navbarTitle};
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

export const NavItem = styled.li<{
  selected: string | undefined;
  path: string;
}>`
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  color: ${({ theme }) => theme.colors.white};
  font-weight: lighter;
  font-size: 1rem;

  a {
    color: ${({ theme, selected, path, color }) =>
      selected === path ? color : theme.colors.white};
    background: ${({ selected, path }) =>
      selected === path ? '#111' : 'none'};
    text-decoration: none;
    padding: 8px 35px;
    transition: all 0.1s ease-in-out;
    margin: 5px;
    border-radius: 5px;
  }

  a:hover {
    background: #121212};
    color: ${({ theme }) => theme.colors.light};
    transition: background 0.4s;
    transition: color 0.4s;
  }
`;

export const NavContainer = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 4;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: flex-end;
  align-items: center;
`;
