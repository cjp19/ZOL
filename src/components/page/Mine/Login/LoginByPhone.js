import React,{Component} from 'react'
import './index.scss'
import { Toast } from 'antd-mobile';

class LoginByPhone extends Component{
    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        let {login} = this.props
        login({
            phonenumber: this.phone.value,
            codenumber: this.code.value,
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
            <div className = 'LoginByPhone-box'>
                <form onSubmit = {this.submit}>
                    <input ref = {el => this.phone = el} type="text" placeholder="请输入手机号" className="phone" />
                    <input ref = {el => this.code = el} type="text" placeholder="请输入短信验证码" className="code" />
                    <button className="login-button">立即登录</button>
                </form>
            </div>
        )
    }
}

export default LoginByPhone