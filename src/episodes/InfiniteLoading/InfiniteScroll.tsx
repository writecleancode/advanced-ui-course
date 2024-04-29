import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import * as paginate from 'paginatejson';
import data from './beers.json';
import { ItemWrapper, Wrapper } from './InfiniteScroll.styles';
import { BeerProps, PageType, beerType, fetchBeersType } from './types';

const fetchBeers: fetchBeersType = (page = 1) => {
	const { items, ...pageInfo } = paginate.paginate(data, page, 6);
	return new Promise(resolve => setTimeout(() => resolve({ items, page: pageInfo }), 250));
};

export const Beer = forwardRef(({ beer: { name, image_url: ImageUrl, abv } }, ref: BeerProps) => {
	return (
		<ItemWrapper ref={ref}>
			<img src={ImageUrl} alt={name} />
			<div>
				<p>Name: {name}</p>
				<p>ABV: {abv}%</p>
			</div>
		</ItemWrapper>
	);
});

export const InfiniteScroll = () => {
	const [beers, setBeers] = useState<never[] | beerType[]>([]);
	const [currentPage, setCurrentPage] = useState<null | PageType>(null);
	const lastBeerRef = useRef(null);
	const observer = useRef<null | IntersectionObserver>(null);

	const loadMoreBeers = useCallback(() => {
		if (!currentPage || !currentPage.next) return;

		fetchBeers(currentPage?.next).then(res => {
			setBeers(prevBeers => [...prevBeers, ...res.items]);
			setCurrentPage(res.page);
		});
	}, [currentPage]);

	useEffect(() => {
		fetchBeers().then(res => {
			setBeers([...res.items]);
			setCurrentPage(res.page);
		});
	}, []);

	useEffect(() => {
		observer.current = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					loadMoreBeers();
				}
			},
			{
				root: document,
				threshold: 1,
			}
		);

		if (lastBeerRef.current) {
			observer.current.observe(lastBeerRef.current);
		}

		return () => {
			observer.current.disconnect();
		};
	}, [loadMoreBeers]);

	return (
		<>
			<Wrapper>
				{beers.map((beer, index) =>
					index === beers.length - 1 ? (
						<Beer ref={lastBeerRef} key={beer.id} beer={beer} />
					) : (
						<Beer key={beer.id} beer={beer} />
					)
				)}
			</Wrapper>
		</>
	);
};
