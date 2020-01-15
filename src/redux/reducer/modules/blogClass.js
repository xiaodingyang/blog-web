import { handleActions } from 'redux-actions';

const initialState = {
    blogClassList: [] // 
};
const GET_BLOG_CLASS_LIST = 'GET_BLOG_CLASS_LIST';

export default handleActions({
    [GET_BLOG_CLASS_LIST]: (state, { payload }) => {
        return { ...state, blogClassList: payload }
    }
}, initialState)