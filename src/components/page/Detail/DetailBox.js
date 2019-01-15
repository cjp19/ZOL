import React,{Component} from 'react'
import './index.scss'
import {GroupCars} from '../../../modules/group'
import {Toast} from 'antd-mobile'

class DetailBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            money: 200
        }
    }
    componentWillMount(){
        console.log('详情props',this.props)
    }
    addcar(data){
        console.log('sdfghsadfgbfdsfgh5555555',data);
        let {addCar} = this.props
        console.log(this,'88888888');
       
        let goodInfo = {
            id: data.goods_id,
            name: data.goods_name,
            price: data.goods_price,
            img: data.goods_pic,
            intro: data.manu_name
        }
          addCar(goodInfo,() => {
              Toast.info('加入成功')
          })
    }
    renderItem(){
        let {data} = this.props
        console.log('详情',data)
        if(data){
            return (
                <div>
                    <div className="banner">
                    <img src={data.goods_pic} alt=""/></div>
                    <div className='goodsInfo'>
                            
                            <h3>{data.goods_name}</h3>
                            <p>
                            {data.manu_name}
                            </p>
                            <div className="price">
                                ￥{data.goods_price}
                            </div>
                            <div className='others'>
                                <span className='yunfei'>
                                    运费 0元
                                </span>
                                <span className='sum'>
                                    销量999件
                                </span>
                                <span className='from'>
                                    发货地： 广州
                                </span>
                            </div>
                            <div className="detail-footer">
                    <span className="footer1">
                        联系商家
                    </span> 
                    <span className="footer2">
                    <a href="">
                    <i className = 'fa fa-shopping-cart'></i>
                    </a>
                    </span> 
                    <span className="footer3" onClick = {this.addcar.bind(this,data)}>
                        加入购物车
                    </span> 
                    <span className="footer4">
                        立即购买
                    </span> 
                       
                </div>
                    </div>
                    
                </div>
            )
        }
    }
    render(){
        return (
            <div className = "app-detail-content-box">
                {this.renderItem()}
            </div>
        )
    }
}
export default GroupCars(DetailBox)