import BigNumber from 'bignumber.js'

export type IfoStatus = 'idle' | 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: string
  name: string
  subTitle?: string
  description?: string
  launchDate: string
  launchTime: string
  saleAmount: string
  raiseAmount: string
  cakeToBurn: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
  tokenSymbol: string
  releaseBlockNumber: number
  campaignId?: string
}

export enum QuoteToken {
  'FTM' = 'FTM',
  'SYRUP' = 'SYRUP',
  'fUSD' = 'fUSD',
  'FUSDT' = 'FUSDT',
  'USDC' = 'USDC',
  'fBTC' = 'fBTC',
  'fETH' = 'fETH',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'ETH' = 'ETH',
  'COMP' = 'COMP',
  'SUSHI' = 'SUSHI',
  'CREEPY' = 'CREEPY',
  'FRAX' = 'FRAX',
  'YFI' = 'YFI',
  'BUSD' = 'BUSD',
  'MIM' = 'MIM',
  'SPELL' = 'SPELL',
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native FTM behave differently than pools using a token
}

export interface Address {
  4002?: string
  250: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  gaugeAddressH?: string
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  isBoosted?: boolean
  multiplier?: string
  isTokenOnly?: boolean
  isStakingPool?: boolean
  isLPToken?: boolean
  isCommunity?: boolean
  isApe?: boolean
  isPsc?: boolean
  isOldPsc?: boolean
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
  gaugeAddress?: string
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  tokenLabel: string
  tokenAddress: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: string
  stakingTokenDecimals?: number
  contractAddress: Address
  poolCategory: PoolCategory
  projectLink: string
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  isBush?: boolean
  isLp?: boolean
  bushVersion?: number
  tokenDecimals: number
  depositFee?: number
  getUrl?: string
  totalValue?: BigNumber
}

export type Images = {
  lg: string
  md: string
  sm: string
  ipfs?: string
}

export type NftImages = {
  blur?: string
} & Images

export type NftVideo = {
  webm: string
  mp4: string
}

export type Nft = {
  name: string
  description: string
  images: NftImages
  sortOrder: number
  bunnyId: number
  video?: NftVideo
}

export type TeamImages = {
  alt: string
} & Images

export type Team = {
  id: number
  name: string
  description: string
  isJoinable?: boolean
  users: number
  points: number
  images: TeamImages
  background: string
  textColor: string
}
