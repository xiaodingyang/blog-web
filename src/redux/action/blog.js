import { createActions } from 'redux-actions';
import { getBlogList } from '../../servers/blog';

export default createActions({
    GET_BLOG_LIST: (params) => {
        return getBlogList(params)
    }
});
