import React,{Component} from 'react'
import './index.scss'
import { NavBar, Icon } from 'antd-mobile';
import LoginByAccount from './LoginByAccount'
import LoginByPhone from './LoginByPhone'

import {GroupUser} from '../../../../modules/group'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'phone'
        }
    }
    renderLogin(){
        let {type} = this.state
        let  {loginPhone,loginAccount} = this.props
        let loginType = 'account'
        let Form = LoginByPhone
        let login = loginPhone
        if(type !== 'phone'){
            loginType = 'phone'
            Form = LoginByAccount
            login = loginAccount
        }
        let handlerClick = () => {
            this.setState({
                type: loginType
            })
        }
        return (
            <div>
                <Form login = {login} />
                <div className="login-content" onClick = {handlerClick}>
                    <button>{type == 'phone'?'已有账号登录':'手机号快捷登录'}</button>
                </div>
            </div>
        )
    }
    render(){
        let {go} = this.props.history
        let {type} = this.state
        return (
            <div className = 'app-login-box'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => go(-1)}
                >{type == 'phone'?'手机号快捷登录':'已有账号登录'}</NavBar>
                {this.renderLogin()}
            </div>
        )
    }
}

export default GroupUser(Login)