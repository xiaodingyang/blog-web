import { createActions } from 'redux-actions';
import { getResumeList } from '../../servers/resume';

export default createActions({
    GET_RESUME_LIST: (params) => {
        return getResumeList(params)
    },
});