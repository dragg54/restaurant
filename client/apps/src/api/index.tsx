import axios from 'axios'
import { useContext, useEffect } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { Item, ItemAction } from '../types/ItemType'
import { User } from '../types/User'
import { AuthContext } from '../contexts/AuthContextProvider'

export const postRequest = (url: string, req: Item) => {
    const { dispatchItemAction, setIsLoading , itemState} = useContext(ItemContext)
    function postItemRequest(){
        const formData = new FormData()
        formData.append('image', req.image)
        console.log('file', req)
        axios.post(url, req , {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
            })
        .then((response) => {
            if (response) {
                console.log(response)
                dispatchItemAction!({ type: ItemAction.ADD_ITEM, payload: { data: response.data } })
            }
            else {
                console.log('null response')
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    return [postItemRequest]
}

export const useFetchItem = (url: string) => {
    const { dispatchItemAction, setIsLoading , itemState} = useContext(ItemContext)
    useEffect(() => {
        setIsLoading!(true)
        axios.get(url)
            .then((response) => {
                if (response) {
                    dispatchItemAction!({ type: ItemAction.FETCH_ITEM, payload: { data: response.data } })
                    setIsLoading!(false)
                }
            }).catch((err) => {
                console.log(err)
            })
    }, [itemState])
}

export const postSignInRequest = (url: string, req:User) =>{
    const {setToken, isLoading, setIsLoading} = useContext(AuthContext)
    function postRequest(){
        axios.post(url, req)
        .then((response)=>{
            setToken!(response.data)
            sessionStorage.setItem('auth', JSON.stringify(response.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}