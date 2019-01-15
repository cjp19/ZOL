import React,{Component} from 'react'
import './index.scss'
import {GroupUser} from '../../../../modules/group'
import { NavBar, Icon } from 'antd-mobile';
import AppFooter from '../../../common/AppFooter'
import Mine from '..';

class User extends Component{
    constructor(props){
        super(props)
        this.exit = this.exit.bind(this)
    }
    exit(){
        let {exitUser} = this.props
        exitUser()
    }
    renderUio(){
        let {chuli} = this.props
        return (
            <ul>
                  {chuli.map(item =>{
                      return (
                        <li key = {item.id}>
                            <span>{item.name}</span>
                        </li>
                      )
                  })}
                  
              </ul>
        )
    }
    render(){
        let {userInfo} = this.props
        let {go} = this.props.history
        return (
            <div className = "user-box">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => go(-1)}
                >Z商城买家中心</NavBar>
                <div className = "user-top">
                    <h4>{!userInfo||userInfo.username}</h4>
                    <button onClick = {this.exit}>注销</button>
                </div>
                <div className = "user-dingdan">
                    <h5><p>我的订单</p></h5>
                    {this.renderUio()}
                </div>
                <div className = "user-service">
                    <ul>
                        <li>退款/售后</li>
                        <li>收货地址管理</li>
                        <li>我的优惠券</li>
                        <li>我的会员卡</li>
                        <li>客服电话</li>
                    </ul>
                </div>
                <AppFooter></AppFooter>
            </div>
        )
    }
}

User.defaultProps = {
    chuli: [{
        id:1,
        name: '代付款'
    },
    {
        id:2,
        name: '代发货'
    },
    {
        id:3,
        name: '代收货'
    },
    {
        id:4,
        name: '代评价'
    },
    {
        id:5,
        name: '全部订单'
    }
]
}


export default GroupUser(User)