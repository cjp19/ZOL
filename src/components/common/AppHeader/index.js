import React,{Component} from 'react'
import './index.scss'
class AppHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="header">
                {/* <img className="header-img1" src="images/logo.png"/> */}
                <div className = 'top-map'>
                    <span>全国</span>
                    <img src="images/head-map.png"/>
                </div>
                <div className = 'search'>
                    {/* <WingBlank><div className="sub-title">Normal</div></WingBlank>
                    <SearchBar placeholder="Search" maxLength={8} /> */}
                </div>
                <div className='login'>
                    <a>登录</a>
                </div>
                
            </div>
        )
    }
}
export default AppHeader