import { handleActions } from 'redux-actions';

const initialState = {
    imgsList: [] // 
};
const GET_IMGS_LIST = 'GET_IMGS_LIST';

export default handleActions({
    [GET_IMGS_LIST]: (state, { payload }) => {
        return { ...state, imgsList: payload }
    }
}, initialState)