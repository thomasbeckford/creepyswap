import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  padding: 1rem;
  height: 6rem;
`
export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  height: 60px;
`

export const NavItem = styled.li<{
  selected: string | undefined
  path: string
}>`
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  color: ${({ theme }) => theme.colors.white};
  font-weight: lighter;
  font-size: 1rem;
  padding: 10px;

  a {
    color: ${({ theme, selected, path }) =>
      selected === path ? theme.colors.gray : theme.colors.white};
    background: ${({ theme, selected, path }) =>
      selected === path ? theme.colors.bgBoxDarker : 'none'};
    text-decoration: none;
    // padding: 0.4rem 1rem;
    border-radius: 8px;
    padding: 12px 20px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background: ${({ theme }) => theme.colors.ciTrans15};
    transition: background 0.4s;
    transition: color 0.4s;
  }
`

export const NavContainer = styled.div`
  cursor: pointer;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 4;
`

export const RightContainer = styled.div`
  display: flex;
  flex-grow: 3;
  justify-content: flex-end;
  align-items: center;
`
