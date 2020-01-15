import { createActions } from 'redux-actions';
import { getList } from '../../servers/imgs';

export default createActions({
    GET_IMGS_LIST: (params) => {
        return getList(params)
    }
});
