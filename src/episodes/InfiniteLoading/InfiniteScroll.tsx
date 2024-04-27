import data from './beers.json';
import * as paginate from 'paginatejson';

const fetchBeers = (page = 1) => {
	const { items, ...pageInfo } = paginate.paginate(data, page, 6);
	return new Promise(resolve => setTimeout(() => resolve({ items, page: pageInfo }), 2500));
};

export const InfiniteScroll = () => {
	return (
		<>
			<div>
				<h2>Infinite scroll 🎉</h2>
			</div>
		</>
	);
};
