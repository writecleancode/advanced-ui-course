import { Wrapper } from './AccordionFaq.styles';
import { data } from './data';

export const AccordionFaq = () => {
	return (
		<Wrapper>
			{data.map(item => (
				<details key={item.title}>
					<summary>{item.title}</summary>
					<div>
						<p>{item.content}</p>
					</div>
				</details>
			))}
		</Wrapper>
	);
};
