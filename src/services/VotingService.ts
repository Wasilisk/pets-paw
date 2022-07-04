/*node-modules*/
import {AxiosResponse} from 'axios';

/*http*/
import $api from '../http';

/*models*/
import {CreateVoteRequest} from '../models/request/create-vote-request';
import {AddToFavouriteRequest} from '../models/request/add-to-favourite-request';
import {AddToFavouriteResponse} from '../models/response/add-to-favourite-response';


export class VotingService {
    static async createVote(data: CreateVoteRequest): Promise<AxiosResponse<void>> {
        return $api.post('votes', data);
    }

    static async saveAsFavourite(data: AddToFavouriteRequest): Promise<AxiosResponse<AddToFavouriteResponse>> {
        return $api.post('favourites', data);
    }

    static async deleteFromFavourite(favourite_id: number): Promise<AxiosResponse<void>> {
        return $api.delete(`favourites/${favourite_id}`);
    }
}