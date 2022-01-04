// import { Toast } from '@pancakeswap-libs/uikit';
import BigNumber from 'bignumber.js';
import {
	// CampaignType,
	FarmConfig,
	Nft,
	PoolConfig,
	Team,
} from '../constants/types';

export type TranslatableText =
	| string
	| {
			id: number;
			fallback: string;
			data?: {
				[key: string]: string | number;
			};
	  };

export interface Gauge extends FarmConfig {
	tokenAmount?: BigNumber;
	quoteTokenAmount?: BigNumber;
	lpTotalInQuoteToken?: BigNumber;
	tokenPriceVsQuote?: BigNumber;
	poolWeight?: BigNumber;
	depositFeeBP?: number;
	spiritPerBlock?: number;
	lpAddress?: string;
	lpSymbol: string;
	gaugeAddress?: string;
	lpTotalInGauge?: BigNumber;
	name?: string;
	userData?: {
		allowance: BigNumber;
		tokenBalance: BigNumber;
		stakedBalance: BigNumber;
		earnings: BigNumber;
	};
	lpTotalSupply?: BigNumber;
	lpTokenBalanceMC?: BigNumber;
}
export interface Farm extends FarmConfig {
	tokenAmount?: BigNumber;
	quoteTokenAmount?: BigNumber;
	lpTotalInQuoteToken?: BigNumber;
	tokenPriceVsQuote?: BigNumber;
	poolWeight?: BigNumber;
	depositFeeBP?: number;
	spiritPerBlock?: number;
	userData?: {
		allowance: BigNumber;
		tokenBalance: BigNumber;
		stakedBalance: BigNumber;
		earnings: BigNumber;
	};
	lpTotalSupply?: BigNumber;
	lpTokenBalanceMC?: BigNumber;
}

export interface Pool extends PoolConfig {
	totalStaked?: BigNumber;
	startBlock?: number;
	endBlock?: number;
	userData?: {
		allowance: BigNumber;
		stakingTokenBalance: BigNumber;
		stakedBalance: BigNumber;
		pendingReward: BigNumber;
	};
}

export interface Profile {
	userId: number;
	points: number;
	teamId: number;
	nftAddress: string;
	tokenId: number;
	isActive: boolean;
	username: string;
	nft?: Nft;
	team: Team;
	hasRegistered: boolean;
}

// Slices states

// export interface ToastsState {
//   data: Toast[];
// }

export interface FarmsState {
	data: Farm[];
}

export interface FarmsV2State {
	data: Gauge[];
}

export interface PoolsState {
	data: Pool[];
}

export interface ProfileState {
	isInitialized: boolean;
	isLoading: boolean;
	hasRegistered: boolean;
	data: Profile;
}

// API Price State
export interface PriceList {
	[key: string]: number;
}

export interface PriceApiResponse {
	/* eslint-disable camelcase */
	update_at: string;
	prices: PriceList;
}

export interface PriceState {
	isLoading: boolean;
	lastUpdated: string;
	data: PriceList;
}

// Global state

export interface State {
	farms: FarmsState;
	boostedFarms: FarmsV2State;
	creepy: any;
	// toasts: ToastsState;
	prices: PriceState;
	pools: PoolsState;
	profile: ProfileState;
}
