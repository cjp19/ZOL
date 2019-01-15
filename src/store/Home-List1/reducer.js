//纯函数
import state from './state'
import * as type from './type'
const reducer = (previousState = state,action) =>{
    let new_state = {...previousState}
    //用户辨识
    switch(action.type){
        case type.GET_LIST_ONE:
            //用户操作
            new_state.listone = action.payLoad
        break;
        default:
        break;
    }
    // console.log('new_state',new_state);
    return new_state
}
export default reducer