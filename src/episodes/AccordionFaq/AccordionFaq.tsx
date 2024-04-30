import { StyledDetails, Wrapper } from './AccordionFaq.styles';
import { data } from './data';

export const AccordionFaq = () => {
	return (
		<Wrapper>
			{data.map(item => (
				<StyledDetails key={item.title}>
					<summary>{item.title}</summary>
					<div>
						<p>{item.content}</p>
					</div>
				</StyledDetails>
			))}
		</Wrapper>
	);
};
