import * as type from './type'
const actionCeator= {
    //方法
    templateFun(){
        let action = {
            type: type.TEMPLATE
        }
    },
    templateFun(payload){
        let action = {
            type: type.TEMPLATE
        }
        payload
    }
}
export default actionCeator