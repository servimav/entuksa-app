import { IMapCoordinate } from './mapPosition';
import { IShopCategory } from './shopCategory';
import { IShopOffer } from './shopOffer';

/**
 * @type IShopStore
 */
export interface IShopStore {
  id: number;
  title: string;
  description?: string;
  image: string;
  map_address?: string;
  map_coordinate?: IMapCoordinate;
  rating: number;
  category?: IShopCategory;
  offers?: IShopOffer[];
  open?: boolean;
}

/**
 * -----------------------------------------
 *	HTTP
 * -----------------------------------------
 */

/**
 * @type IShopStoreCreateRequest
 */
export interface IShopStoreCreateRequest {
  title: string;
  description: string;
  image: string | File;
  map_address: string;
  map_coordinate: IMapCoordinate;
  category_tag: string;
  open: boolean;
}
/**
 * IShopStoreFilter
 */
export interface IShopStoreFilterRequest {
  where?: {
    open?: boolean;
    title?: string;
    description?: string;
  };
  limit?: number;
}
/**
 * @type IShopStoreUpdateRequest
 */
export type IShopStoreUpdateRequest = Partial<IShopStoreCreateRequest>;
