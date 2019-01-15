//统一管理的reducer
import {combineReducers} from 'redux'
import typeContent from  './Type/reducer'
import listone from './Home-List1/reducer'
import user from './mineData/reducer'
import detail from './detail/reducer'
import shopcar from './shopcar/reducer'
const reducer = combineReducers({
    listone,typeContent,user,detail,shopcar
})
export default reducer