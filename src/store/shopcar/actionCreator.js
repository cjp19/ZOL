import * as type from './type'
const actionCeator= {
    //方法
    addCar(goodInfo,success,fail){
        return dispatch => {
            console.log('goodInfo',goodInfo)
            setTimeout(() => {
                let action = {
                    type: type.ADD_CAR,
                    payLoad: goodInfo
                }
                dispatch(action)
                if(success) success()
                return false
            },500)
        }
    }
}
export default actionCeator