import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
	padding: 1rem;
	height: 6rem;
`;

export const NavList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	font-size: 1rem;
	font-weight: bold;
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
	font-weight: 400;

	a {
		color: ${({ theme, selected, path }) =>
			selected === path ? theme.colors.green : theme.colors.white};
		transition: color 0.1s ease-in-out;
		text-decoration: none;
		padding: 0.4rem 1rem;
		border-radius: 0.5rem;
		background: ${({ theme, selected, path }) =>
			selected === path ? theme.colors.ciTrans15 : 'none'};
	}
`;

export const NavContainer = styled.div`
	cursor: pointer;
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
