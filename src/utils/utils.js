import Cookies from 'js-cookie';
import Loadable from 'react-loadable';
import Loading from 'components/loading/loading';
import React from 'react';


/* 获取 userInfo 列表 */
export function getUserInfo(obj) {
    return Cookies.get('userInfo') && JSON.parse(Cookies.get('userInfo'))
}

/* 获取是否是管理员权限 */
export function isSuper(obj) {
    return Cookies.get('userInfo') && JSON.parse(Cookies.get('userInfo')).auth === 1
}



//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export function LoadableImport(loader) {
    return Loadable({
        loader,
        loading: () => <Loading></Loading>
    });
}