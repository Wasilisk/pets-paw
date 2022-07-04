import {Category} from './category';
import {Breed} from './breed';

export type Image = {
    breeds: [Breed],
    categories: [Category],
    id: string,
    url: string,
    height: number,
    width: number
}