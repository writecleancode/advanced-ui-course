import { ForwardedRef } from 'react';

export type beerType = {
	id: number;
	name: string;
	tagline: string;
	first_brewed: string;
	description: string;
	image_url: string;
	abv: number;
	ibu: number;
	target_fg: number;
	target_og: number;
	ebc: number;
	srm: number;
	ph: number;
	attenuation_level: number;
	volume: {
		value: number;
		unit: string;
	};
	boil_volume: {
		value: number;
		unit: string;
	};
	method: {
		mash_temp: {
			temp: {
				value: number;
				unit: string;
			};
			duration: number;
		}[];
		fermentation: {
			temp: {
				value: number;
				unit: string;
			};
		};
		twist: null;
	};
	ingredients: {
		malt: {
			name: string;
			amount: {
				value: number;
				unit: string;
			};
		}[];
		hops: {
			name: string;
			amount: {
				value: number;
				unit: string;
			};
			add: string;
			attribute: string;
		}[];
		yeast: string;
	};
	food_pairing: string[];
	brewers_tips: string;
	contributed_by: string;
};

export type PageType = {
	prev?: number;
	next?: number;
	current: number;
	first: number;
	last: number;
};

export type fetchBeersType = (page?: number) => Promise<{
	items: Record<any, any>;
	page: PageType;
}>;

export type BeerProps = {
	beer: beerType;
	ref: ForwardedRef<any>;
};
