//纯函数
import state from './state'
import * as type from './type'
const reducer = (previousState = state,action) =>{
    let new_state = {...previousState}
    //用户辨识
    switch(action.type){
        case type.ADD_CAR:
            //用户操作
            new_state.cars = handler.addCar(new_state.cars,action.payLoad)
            break;
        default:
            break;
    }
    return new_state
}

let handler = {
    addCar(cars,goodInfo){
        let _cars = cars.slice()
        let isHas = _cars.some(item => {
            if(item.id === goodInfo.id){
                item.num +=goodInfo.num
                return true
            }
            return false
        })

        if(!isHas){
            _cars.push(goodInfo)
        }
        return _cars
    }
}

export default reducer