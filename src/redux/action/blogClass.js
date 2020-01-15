import { createActions } from 'redux-actions';
import { getList } from '../../servers/blogClass';

export default createActions({
    GET_BLOG_CLASS_LIST: (params) => {
        return getList(params)
    }
});
