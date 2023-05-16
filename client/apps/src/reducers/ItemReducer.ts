import { ItemAction, Item } from "../types/Item"

interface IAction {
    type: unknown,
    payload: {
        data: Item,
        item: Item
    }
}

export let initialItemState:never;
export const itemReducer = (state: [Item], action: IAction) => {
    let itemIndex: number;
    switch (action.type) {
        case ItemAction.FETCH_ITEM:
            return action.payload.data
            
        case ItemAction.ADD_ITEM:
            if (state && state.length > 0) {
                const lastItemId = state[state.length - 1].id!
                action.payload.data.id = lastItemId + 1
                return [...state, action.payload.data]
            }
            else{
                action.payload.data.id = 1
                return [action.payload.data]
            }  
        
        case ItemAction.DELETE_ITEM:
            itemIndex = state.findIndex(x => x.id == action.payload.item.id)
            state.splice(itemIndex, itemIndex + 1)
            return state
        
        case ItemAction.UPDATE_ITEM:
            itemIndex = state.findIndex(x => x.id == action.payload.item.id)
            state.splice(itemIndex, itemIndex + 1) 
            state[itemIndex] = action.payload.item
        
        case ItemAction.FIND_ITEM:
           let item = state.find(x => x.id == action.payload.item.id)
           return [item]
            
    }
}