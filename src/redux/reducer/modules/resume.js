import { handleActions } from 'redux-actions';

const initialState = {
    resumeList: [],
};
const GET_RESUME_LIST = 'GET_RESUME_LIST';
export default handleActions({
    [GET_RESUME_LIST]: (state, { payload }) => {
        return { ...state, resumeList: payload }
    },

}, initialState)