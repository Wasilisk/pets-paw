export type OrderTypes = "RANDOM" | "ASC" | "DESC";
export type ImageType = "gif" | "jpg,png" | null;

export type GalleryFilters = {
    order: OrderTypes,
    limit: number,
    page: number | null,
    breedId: string | null,
    imageType: ImageType
}