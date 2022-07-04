export type Action = {
    id: string,
    type: "add" | "remove",
    category: "Likes" | "Favourites" | "Dislikes",
    image_id: string,
    created_at: string,
}