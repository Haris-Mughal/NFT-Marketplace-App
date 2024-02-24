export interface GetNftState {
  data: GetNftData | null;
  isLoading: boolean;
  isError: string | null;
}

export interface GetNftData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  id: string;
}

export interface GetNftImagesParams {
  chain: string;
  address: string;
  identifier: string;
}

export interface GetNftByCollectionState {
  data: GetNftByCollectionData[];
  isLoading: boolean;
  isError: string | null;
}

export type Contract = {
  address: string;
  chain: string;
};

export interface GetNftByCollectionData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  identifier: string;
  is_nsfw: boolean;
  contracts: Contract[];
}

export interface GetCollectionState {
  data: GetCollectionData | null;
  isLoading: boolean;
  isError: string | null;
}

export type GetCollectionData = {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  identifier: string;
  contracts: Contract[];
};

export interface CollectionsState {
  data: CollectionsData[];
  isLoading: boolean;
  isError: string | null;
}

export interface CollectionsData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  is_nsfw: boolean;
  id: string;
  item: string;
}

export interface WorkCardProps {
  image: string;
  name: string;
  description: string;
}

export interface ImagesData {
  image_url: string;
  collection: string;
  name: string;
}

export interface TrendCardProps {
  item: ImagesData;
  display?: string;
}

export interface DiscoverCardProps {
  item: ImagesData;
  display?: string;
}

export interface CardProps {
  item: GetCollectionData;
  contract: Contract;
}

export interface BrowseCardProps {
  item: CollectionsData;
}

export const description1 =
  "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.";
export const description2 =
  "Upload your work and setup your collection. Add a description, social links and floor price.";
export const description3 =
  "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.";
