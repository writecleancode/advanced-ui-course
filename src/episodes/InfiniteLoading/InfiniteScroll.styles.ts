import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: 400px 400px;
	grid-template-rows: auto;
	grid-gap: 50px 50px;
	padding: 2.4rem;
	min-height: 100vh;
`;

export const ItemWrapper = styled.div`
	position: relative;
	justify-self: center;
	padding: 20px 0 20px 30px;
	border: 10px solid black;
	width: 100%;
	height: auto;
	min-height: 400px;

	img {
		max-height: 400px;
		object-fit: contain;
	}

	div {
		position: absolute;
		left: 0;
		bottom: 10%;
		z-index: -1;
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 12px 10px;
		width: 100%;
		background-color: #ffd121;
		text-align: right;
		font-weight: bold;
	}
`;
