type Image = {
    data: string
}

export type Item = {
    id?: number,
    _id?: number,
    name?: string,
    quantity?: number,
    price?: string,
    category?: string,
    image?: Image,
    discount?: number,
    description?: string,
    createdAt?: Date,
    createdBy?: string,
    updateAt?: Date,
    updatedBy?: Date
}

export enum ItemAction{
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    FETCH_ITEM,
    FIND_ITEM
}
