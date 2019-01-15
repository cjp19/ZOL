//纯函数
import state from './state'
import * as type from './type'
const reducer = (previousState = state,action) =>{
    let new_state = {...previousState}
    //用户辨识
    switch(action.type){
        case type.GET_TYPE_CONTENT:
        // console.log(action.payLoad,'55555555555');
            new_state.typeContent = action.payLoad
            
        break;
        default:
        break;
    }
    // console.log('new-state',new_state);
    return new_state
}
export default reducer