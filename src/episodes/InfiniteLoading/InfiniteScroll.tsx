import { useEffect, useState } from 'react';
import * as paginate from 'paginatejson';
import data from './beers.json';
import { ItemWrapper, Wrapper } from './InfiniteScroll.styles';
import { BeerProps, PageType, beerType, fetchBeersType } from './types';

const fetchBeers: fetchBeersType = (page = 1) => {
	const { items, ...pageInfo } = paginate.paginate(data, page, 6);
	return new Promise(resolve => setTimeout(() => resolve({ items, page: pageInfo }), 25));
};

export const Beer = ({ beer: { name, image_url: ImageUrl, abv } }: BeerProps) => {
	return (
		<ItemWrapper>
			<img src={ImageUrl} alt={name} />
			<div>
				<p>Name: {name}</p>
				<p>ABV: {abv}%</p>
			</div>
		</ItemWrapper>
	);
};

export const InfiniteScroll = () => {
	const [beers, setBeers] = useState<never[] | beerType[]>([]);
	const [currentPage, setCurrentPage] = useState<null | PageType>(null);

	const handleLoadMoreButton = () => {
		fetchBeers(currentPage?.next).then(res => {
			setBeers(prevBeers => [...prevBeers, ...res.items]);
			setCurrentPage(res.page);
		});
	};

	useEffect(() => {
		fetchBeers().then(res => {
			setBeers([...res.items]);
			setCurrentPage(res.page);
		});
	}, []);

	return (
		<>
			<button onClick={handleLoadMoreButton}>Load more</button>
			<Wrapper>
				{beers.map(beer => (
					<Beer key={beer.id} beer={beer} />
				))}
			</Wrapper>
		</>
	);
};
