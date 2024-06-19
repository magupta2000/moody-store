import { ServiceInstance } from "../../library/services"
import { AppThunk } from "../../store/store"
import { failurePosts, requestPosts, successPosts } from "../Slices/PostsSlice"

export const getPostsThunk = ():AppThunk => async (dispatch) =>{
    try {
        dispatch(requestPosts())
        const data = await ServiceInstance.get('/products')
        dispatch(successPosts(data))
    } catch (error) {
        dispatch(failurePosts())
    }
}