/*node-modules*/
import {AxiosResponse} from 'axios';

/*http*/
import $api from '../http';

/*models*/
import {AddToFavouriteRequest} from '../models/request';
import {AddToFavouriteResponse} from '../models/response/';
import {Favourite} from '../models/common';


export class FavouritesService {
    static async saveAsFavourite(data: AddToFavouriteRequest): Promise<AxiosResponse<AddToFavouriteResponse>> {
        return $api.post('favourites', data);
    }

    static async deleteFromFavourite(favourite_id: number): Promise<AxiosResponse<void>> {
        return $api.delete(`favourites/${favourite_id}`);
    }

    static async getUserFavourites(): Promise<AxiosResponse<[Favourite]>> {
        return $api.get('favourites');
    }
}