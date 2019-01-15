import React,{Component} from 'react'
import './index.scss'
import { Toast } from 'antd-mobile';

class LoginByAccount extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        let {login} = this.props
        login({
            username: this.username.value,
            password: this.password.value,
            success(){
                Toast.success('Load success !!!', 1);
                console.log('登陆成功')
            },
            fail(){
                Toast.fail('Load failed !!!', 1);
                console.log('登录失败')
            }
        })
    }
    render(){
        return (
            <div className = 'LoginByAccount-box'>
                <form onSubmit = {this.submit}>
                    <input ref = {el => this.username = el} type="text" placeholder="请输入用户名/邮箱/手机号" className="username" />
                    <input ref = {el => this.password = el} type="text" placeholder="请输入密码，4-16位" className="password" />
                    <button className="login-button">立即登录</button>
                </form>
            </div>
        )
    }
}

export default LoginByAccount