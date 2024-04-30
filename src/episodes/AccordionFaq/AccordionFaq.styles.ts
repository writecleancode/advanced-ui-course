import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	padding: 100px;
	width: 100%;
`;

const showBox = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

const showContent = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2%);
  }
  100% {
    opacity: 100%;
    transform: translateX(0);
  }
`;

export const StyledDetails = styled.details`
	position: relative;
	margin: 30px 0;
	width: 600px;

	summary {
		list-style: none;
		font-size: 24px;
		cursor: pointer;
	}

	summary::after {
		content: '>';
		position: absolute;
		left: -50px;
		display: inline-block;
		margin-left: 20px;
		transform: rotate(90deg);
		transition: transform 0.2s ease-in-out;
	}

	summary:focus-visible {
		outline: 3px solid #f9e852;
	}

	&[open] {
		summary::after {
			transform: rotate(-90deg);
		}
	}

	// Firefox animation workaround
	&[open] div {
		display: block;
	}

	div {
		display: none;
		margin: 20px 0;
		padding: 20px 40px 20px 20px;
		border-left: 10px solid black;
		background-color: #f9e852;
		font-size: 18px;
		line-height: 1.5;
		transform: scaleY(0);
		transform-origin: 0 0;
		animation: 0.5s ease-in-out 1 forwards ${showBox};

		p {
			opacity: 0;
			animation: 0.3s 0.6s ease-in 1 forwards ${showContent};
		}
	}

	@media not all and (min-resolution: 0.001dpcm) {
		@supports (-webkit-appearance: none) and (stroke-color: transparent) {
			summary::-webkit-details-marker {
				display: none;
			}

			summary:focus {
				outline: 3px solid #f9e852;
			}
		}
	}
`;
