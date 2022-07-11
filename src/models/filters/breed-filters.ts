export type BreedsSortType = "desc" | "asc";

export type BreedFilters = {
    limit: number,
    page: number,
    sortType: BreedsSortType
}