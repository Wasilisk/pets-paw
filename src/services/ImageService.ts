/*node-modules*/
import {AxiosResponse} from 'axios';

/*http*/
import $api from '../http';

/*models*/
import {Image} from '../models/common/image';

export class ImageService {
    static async getRandomImage(): Promise<AxiosResponse<[Image]>> {
        return $api.get('images/search?limit=1');
    }

    static async getImagesByBreedId(breedId: string): Promise<AxiosResponse<[Image]>> {
        return $api.get(`images/search?breed_id=${breedId}&limit=5`);
    }

    static async getOneImageBreedById(breedId: string): Promise<AxiosResponse<[Image]>> {
        return $api.get(`images/search?breed_id=${breedId}&limit=1`);
    }
}