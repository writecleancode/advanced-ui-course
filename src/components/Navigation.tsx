import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav<{ $isOpen: boolean }>`
	position: absolute;
	right: 0;
	top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 235px;
	height: auto;
	background-color: #eee;
	translate: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};
	transition: translate 0.5s ease-in-out;
`;

const NavList = styled.ul`
	padding: 0;
	list-style: none;
`;

const NavListItem = styled.li`
	margin: 10px 0;
`;

const StyledNavLink = styled(NavLink)`
	font-family: 'IBM Plex Mono', monospace;
	color: black;
	font-size: 1.4rem;
	text-decoration: none;

	&.active {
		font-weight: bold;
	}
`;

const NavButton = styled.button`
	position: absolute;
	left: -40px;
	border: none;
	width: 40px;
	height: 40px;
	background-color: #eee;
`;

export const Navigation = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Nav $isOpen={isOpen}>
			<NavButton onClick={() => setIsOpen(!isOpen)}>🍔</NavButton>
			<NavList>
				<NavListItem>
					<StyledNavLink to='/'>Home</StyledNavLink>
				</NavListItem>
				<NavListItem>
					<StyledNavLink to='/infinite-scroll'>Infinite Scroll</StyledNavLink>
				</NavListItem>
			</NavList>
		</Nav>
	);
};
