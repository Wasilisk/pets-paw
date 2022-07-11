export type ImageUploadResponse = {
    id: string,
    url: string,
    sub_id: string,
    original_filename: string,
    pending: 0 | 1,
    approved: 0 | 1,
}