import { createSlice } from '@reduxjs/toolkit'

export type iniitialStateType = {
    allPosts: {
        id: number,
        img: string,
        description: string,
        category: string,
        price: number
    }[],
    isLoading: boolean
}

const initialState: iniitialStateType = {
    allPosts: [{
        id: 1,
        img: '',
        description: '',
        category: '',
        price: 0
    }],
    isLoading: false
}

const PostSlice = createSlice({
    name: 'PostSlice',
    initialState,
    reducers: {
        requestPosts: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        successPosts: (state, action) => {
            console.log('statttette', action.payload)
            return {
                ...state,
                allPosts: action.payload,
                isLoading: false
            }
        },
        failurePosts: (state) => {
            return {
                ...state,
                isLoading: false,
            }
        }
    }
});

export const { requestPosts, successPosts, failurePosts } = PostSlice.actions;
export default PostSlice.reducer;