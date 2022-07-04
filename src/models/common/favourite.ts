import {Image} from './image';

export type Favourite = {
    id: number,
    user_id: string,
    image_id: string,
    sub_id: string,
    created_at: string,
    image: Pick<Image, "id" | "url">
}