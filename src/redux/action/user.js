import { createActions } from 'redux-actions';
import { getUserList } from '../../servers/user';

export default createActions({
    GET_USER_LIST: (params) => {
        return getUserList(params)
    },
});
