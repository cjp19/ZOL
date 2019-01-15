import * as type from './type'
import axios from 'axios'
const actionCeator= {
    //方法
    getListOne(){
        return dispatch => {
            // http://m.zol.com/index.php?c=Shop_IndexV2&a=AjaxGetGoods&pos=4&page=1
            axios.get('/zsc/index.php',{
                params:{
                    c: "Shop_IndexV2",
                    a: "AjaxGetGoods",
                    pos: 2,
                    page: 1,
                }
            })
            .then(
                res => {
                    //1.创建action
                    console.log('object',res);
                    let action = {
                        type: type.GET_LIST_ONE,
                        payLoad:res.data.info.data
                    }
                    //2.发送action
                    dispatch(action)
                }
            )
            .catch(err=>console.log(err))    
        }
    }
}
export default actionCeator