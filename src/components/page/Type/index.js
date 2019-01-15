import React,{Component} from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
import Content from './type_content'
class Type extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
  
    renderNavs(){
        let {typeNavs} = this.props
        console.log(this.props,'aaaaa');
        return (
            <ul>
                {typeNavs.map((item) => {
                    return (
                        <li key = {item.id}>
                            
                            <NavLink 
                                activeClassName = 'active'
                                
                                to = {{
                                    pathname: '/type/001',
                                    search: `?id=${item.id}`
                                }}
                               
                            >
                                {item.title}
                            </NavLink>
                            
                        </li>
                    )
                })}
            </ul>
        )
        
        
    }
    render(){
        return (
            <div className="type-box">
                <div className='type-head'>
                        全部分类
                </div>
                <div className = 'main'>
                    <div className='aside'>
                        {this.renderNavs()}
                    </div>
                    <Content data={this.props.location.search.slice(1)}></Content>
                </div>
            </div>
        )
    }
}
Type.defaultProps = {
    typeNavs : [
        {
            id:'1',
            title:'热门推荐',
            exact:true
        },
        {
            id:'2',
            title:'手机通讯'
        },
        {
            id:'3',
            title:'电脑整机'
        },
        {
            id:'4',
            title:'摄影摄像'
        } 
    ]
}
export default Type