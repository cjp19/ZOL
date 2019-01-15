import * as type from './type'
import axios from 'axios'
const actionCeator= {
    getContent(){
        return dispatch => {
            //https://www.duitang.com/napi/blog/list/by_category/
            // ?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000003&path=&_=1546594638668
            axios
            .get('http://localhost:3000/data/typeContent.json')
            .then(
                
                res=>{
                    console.log('rescontent',res)
                    console.log('res,data',res.data);
                    let action = {
                        type: type.GET_TYPE_CONTENT,
                        payLoad:res.data
                    }
                    dispatch(action)
                }
            )
            .catch(err=>console.log(err))
        }
    }
    
}
export default actionCeator