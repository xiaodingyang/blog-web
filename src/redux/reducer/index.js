import combineReducers from "redux/src/combineReducers";
import user from "./modules/user";
import blog from "./modules/blog";
import blogClass from "./modules/blogClass";
import resume from "./modules/resume";
import other from "./modules/other";
import imgs from "./modules/imgs";

export default combineReducers({
    user, other, blog, resume, blogClass, imgs
});