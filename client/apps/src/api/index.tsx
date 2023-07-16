import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { ItemContext } from '../contexts/ItemContext'
import { Item, ItemAction } from '../types/Item'
import { User } from '../types/User'
import { AuthContext } from '../contexts/AuthContext'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
import { FormItemContext } from '../contexts/FormItemContext'
import { NotificationContext } from '../contexts/NotificationContext'
import { Order } from '../types/Order'

export const postRequest = (url: string, req: Item) => {
    const { dispatchItemAction, setIsLoading, itemState } = useContext(ItemContext)
    function postItemRequest() {
        const formData = new FormData()
        formData.append('image', req.image)
        axios.post(url, req, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                if (response) {
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

export const updateItem = (url: string, req: Item) => {
    const { dispatchItemAction, setIsLoading, isLoading } = useContext(ItemContext)
    const { itemToBeUpdated, setItemToBeUpdated } = useContext(FormItemContext)!
    const formData = new FormData()
    formData.append('image', req.image)
    function updateItemRequest() {
        axios.put(url, req, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Cookie': document.cookie
            }
        })
            .then((response) => {
                req._id = itemToBeUpdated?._id
                if (response) {
                    dispatchItemAction!({ type: ItemAction.UPDATE_ITEM, payload: { id: itemToBeUpdated?._id, item: req } })
                    setItemToBeUpdated!({})
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    return [updateItemRequest]
}

export const useFetchItem = (url: string) => {
    const { dispatchItemAction, setIsLoading, itemState } = useContext(ItemContext)
    const { token } = useContext(AuthContext)
    useEffect(() => {
        setIsLoading!(true)
        axios.get(url, {
            withCredentials: true,
            headers: {
                'Cookie': document.cookie
            }
        })
            .then((response) => {
                if (response) {
                    dispatchItemAction!({ type: ItemAction.FETCH_ITEM, payload: { data: response.data } })
                    setIsLoading!(false)
                }
            }).catch((err) => {
                console.log(err)
            })
    }, [])
}

export const postSignInRequest = (url: string, req: User) => {
    const { setToken, isLoading, setIsLoading, setIsLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    function postSignIn() {
        setIsLoading!(true)
        axios.post(url, req)
            .then((response) => {
                setToken!(response.data)
                Cookies.set('auth', response.data, { expires: 7 });
                localStorage.setItem("token", JSON.stringify(response.data))
                setIsLoading!(false)
                setIsLoggedIn!(true)
                navigate("/dashboard")
            }).catch((err) => {
                console.log(err)
            })
    }
    return [postSignIn]
}

export const postNotification = () =>{
    axios.post("http://localhost:8080/api/v1/notification", {
        msg: "A new order has been received"
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

export const useFetchNotification = () =>{
    const {notification, dispatchNotificationAction, isLoading} = useContext(NotificationContext)!
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/notification")
    .then((res)=>{
       if(res.data.length > 0){
        dispatchNotificationAction({ type: "ADD_NOTIFICATION", payload: { msg: "You have received New Order" } })
       }
    }).catch((err)=>{
        console.log(err)
    })
    }, [isLoading])
}

export const useFetchOrder = (refresh: boolean):[[Order], boolean] =>{
    const [order, setOrder] = useState<[Order]>()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/orders")
    .then((res)=>{
        setOrder(res.data)
        setLoading(false)
   }).catch((err)=>{
        console.log(err)
    })
    }, [loading, refresh])
    return [order!, loading]
}

export const deleteNotifications = () =>{
    axios.delete("http://localhost:8080/api/v1/notifications")
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}