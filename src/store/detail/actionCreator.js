import * as type from './type'
import axios from 'axios'
const actionCeator= {
    //方法
    getDetail(id){
        return dispatch => {
            axios
             .get('/zsc/index.php',{
                 params: {
                    c: "Shop_IndexV2",
                    a: "AjaxGetGoods",
                    pos: 2,
                    page: 1,
                 }
             })
             .then(
                 res => {
                     console.log('====================================');
                     console.log(res.data.info.data);
                     console.log('====================================');
                     let data1 = {}
                     res.data.info.data.map(item => {
                         if(id == item.goods_id)
                         data1 = item
                     })
                     console.log(data1)
                     let action = {
                         type: type.GET_DETAIL_DATA,
                         payLoad: data1
                     }
                     dispatch(action)
                 }
             )
             .catch(error => console.log( error ))
        }
     }
}
export default actionCeator