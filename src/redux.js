import rootReducer from "./store/reducers/rootReducer";
import { createStore ,applyMiddleware} from "redux";
import { thunk } from "redux-thunk";
const reduxConfig = ()=>{
    const  store = createStore(rootReducer,applyMiddleware());
    return store;
}
export default reduxConfig;