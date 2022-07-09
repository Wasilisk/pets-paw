/*node-modules*/
import {AxiosResponse} from 'axios';

/*http*/
import $api from '../http';

/*models*/
import {Image} from '../models/common';
import {GalleryFilters} from '../models/filters';

export class ImageService {
    static async getImageById(imageId: string): Promise<AxiosResponse<Image>> {
        return $api.get(`images/${imageId}`);
    }

    static async getRandomImage(): Promise<AxiosResponse<[Image]>> {
        return $api.get('images/search?limit=1');
    }

    static async getImagesByBreedId(breedId: string): Promise<AxiosResponse<[Image]>> {
        return $api.get(`images/search?breed_id=${breedId}&limit=5`);
    }

    static async getOneImageBreedById(breedId: string): Promise<AxiosResponse<[Image]>> {
        return $api.get(`images/search?breed_id=${breedId}&limit=1`);
    }

    static async getAllImages({order, imageType, breedId, page, limit}: GalleryFilters): Promise<AxiosResponse<[Image]>> {
        return $api.get(`images/search`, {
            params: {
                order,
                page,
                limit,
                mime_types: imageType,
                breed_id: breedId
            }
        });
    }
}