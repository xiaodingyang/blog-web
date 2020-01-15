import { handleActions } from 'redux-actions';

const initialState = {
    isDrawer: false, // 控制右侧弹窗
    loading: false,
};
const GET_IS_DRAWER = 'GET_IS_DRAWER';
const SET_LOADING = 'SET_LOADING'
export default handleActions({
    [GET_IS_DRAWER]: (state, { payload }) => {
        return { ...state, isDrawer: payload }
    },
    [SET_LOADING]: (state, { payload }) => {
        return { ...state, loading: payload }
    },
}, initialState)