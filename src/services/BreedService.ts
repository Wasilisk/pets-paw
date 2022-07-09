/*node-modules*/
import {AxiosResponse} from 'axios';

/*http*/
import $api from '../http';

/*models*/
import {Breed} from '../models/common';

export class BreedService {
    static async getAllBreeds(): Promise<AxiosResponse<[Breed]>> {
        return $api.get('breeds');
    }

    static async searchBreedByName(breedName: string): Promise<AxiosResponse<[Breed]>> {
        return $api.get(`breeds/search?q=${breedName}`);
    }
}