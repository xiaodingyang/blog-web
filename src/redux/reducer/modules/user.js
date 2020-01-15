import { handleActions } from 'redux-actions';

const initialState = {
    userList: [], // 验证码图片
};
const GET_USER_LIST = 'GET_USER_LIST';
// const GET_USER_LOGIN = 'GET_USER_LOGIN';
export default handleActions({
    [GET_USER_LIST]: (state, { payload }) => {
        return { ...state, userList: payload }
    },

}, initialState)