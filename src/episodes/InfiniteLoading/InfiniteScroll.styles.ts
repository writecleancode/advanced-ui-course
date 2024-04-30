import styled, { keyframes } from 'styled-components';

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

// ==================

const loaderAppear = keyframes`
   from {
     opacity: 0;
   }
  to {
    opacity: 100%;
  }
`;

export const LoaderWrapper = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0;
	width: 100%;
	height: 400px;
	background-image: linear-gradient(0deg, white, rgba(255, 255, 255, 0.5));
	opacity: 0;
	animation: 0.2s ease-in forwards 1 ${loaderAppear};

	p {
		margin: 20px 0 0 0;
		color: black;
		font-size: 45px;
		font-weight: bold;
		text-shadow: 3px 3px 0px rgba(254, 183, 16, 0.8);
	}
`;

const bubbling = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Bubbles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 150px;
	height: 150px;
`;

export const Bubble = styled.div`
	align-self: flex-end;
	border: 2px solid rgba(254, 183, 16, 0.8);
	border-radius: 50px;
	width: 20px;
	height: 20px;
	background-color: rgba(254, 183, 16, 0.8);
	opacity: 0;
	animation: linear infinite forwards ${bubbling};
	animation-delay: ${() => {
		return `${Math.ceil(Math.random() * (1 - 0.25 + 1) + 0.25)}s`;
	}};
	animation-duration: ${() => {
		return `${Math.ceil(Math.random() * (3 - 0.25 + 1) + 0.25)}s`;
	}};
`;
