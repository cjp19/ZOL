import React,{Component} from 'react'
import './index.scss'
import Login from './Login'
import User from './User'
import {Route} from 'react-router-dom'
import {GroupUser} from '../../../modules/group'

class Mine extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
    }
    componentWillMount(){
        this.checkUserInfo()
    }
    componentWillReceiveProps(props){
        console.log('路由发生改变')
        let {pathname} = props.location
        if(pathname === this.props.location.pathname){
            this.checkUserInfo(props)
        }
    }
    checkUserInfo(props){
        // console.log(this.props)
        let {userInfo} = (props||this.props)
        let {replace} = this.props.history
        if(userInfo){
            //编程式导航
            replace('/mine/user')
        }else{
            replace('/mine/login')
        }
    }
    login(){
        let val = this.el.value;
        let {login} = this.props
        login(val)
    }
    
    render(){
        return (
            <div className = 'app-mine-box'>
                <Route path = '/mine/login' component = {Login}></Route>
                <Route path = '/mine/user' component = {User}></Route>
            </div>
        )
    }
}

Mine.defaultProps = {
    chuli: [{
        id:1,
        name: '代付款'
    },
    {
        id:2,
        name: '代付款'
    },
    {
        id:3,
        name: '代付款'
    },
    {
        id:4,
        name: '代付款'
    },
    {
        id:5,
        name: '代付款'
    }
]
}

export default GroupUser(Mine)