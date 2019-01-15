import React,{Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
class AppFoot extends Component{
    constructor(props){
        super(props)
    }
    renderAppFooterNavs(){
        let {appFooterNavs} = this.props
        return (
            <ul>
                { appFooterNavs.map( item => {
                    return (
                        <li  key = {item.id}>
                            <NavLink 
                                activeClassName = 'active'
                                to = { {
                                    pathname: item.path
                                }}
                                exact = { item.exact }
                            >
                                <i className = {'fa fa-'+item.icon}></i>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                        )
                    })}
            </ul>
        )
    }
    render(){
        return (
            <div className="foot-box">
                { this.renderAppFooterNavs() }
            </div>
        )
    }
}
AppFoot.defaultProps = {
    appFooterNavs: [
        {
            id: 1, 
            title: '首页',
            icon: 'home',
            path: '/',
            exact: true
        },
        {
            id: 2, 
            title: '分类',
            icon: 'list',
            path: '/type/001?id=1'
        },
        {
            id: 3, 
            title: '购物车',
            icon: 'shopping-cart',
            path: '/shopcar'
        },
        {
            id: 4, 
            title: '我',
            icon: 'user',
            path: '/mine'
        },
    ]
}
export default AppFoot