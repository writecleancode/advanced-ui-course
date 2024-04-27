import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 90vh;
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 40px;
	width: 700px;
	height: 400px;
	background-color: #f0f0f0;
	text-align: center;
`;

const StyledLogo = styled.img`
	width: 50px;
	height: auto;
`;

export const Welcome = () => {
	return (
		<Wrapper>
			<Content>
				<StyledLogo src='src/assets/icons/logo.svg' />
				<h1>Hello Roman - Zaawansowany UI</h1>
				<p>
					W tym projekcie znajdziesz wszystkie przykłady, które powstały w kursie Zaawansowany UI. Możesz nawigować
					pomiędzy nimi używając menu po prawej stronie.
				</p>
				<p>
					<strong>Powodzenia i owocnej nauki!</strong>
				</p>
			</Content>
		</Wrapper>
	);
};
