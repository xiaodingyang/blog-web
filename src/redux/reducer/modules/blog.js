import { handleActions } from 'redux-actions';

const initialState = {
    blogList: [] // 
};
const GET_BLOG_LIST = 'GET_BLOG_LIST';

export default handleActions({
    [GET_BLOG_LIST]: (state, { payload }) => {
        return { ...state, blogList: payload }
    }
}, initialState)