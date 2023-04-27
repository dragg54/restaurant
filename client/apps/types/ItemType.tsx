export type Item = {
    id?: number,
    name: string,
    quantity: number,
    price: string,
    category: string,
    image: string,
    description: string,
    createdAt?: Date,
    createdBy?: string,
    updateAt?: Date,
    updatedBy?: Date
}

export enum ItemAction{
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    FETCH_ITEM
}
