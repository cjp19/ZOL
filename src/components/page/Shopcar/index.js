import React,{Component} from 'react'
import './index.scss'
import { NavBar, Icon } from 'antd-mobile';
import AppFooter from '../../common/AppFooter'
class Shopcar extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        let {go} = this.props.history
        return (
            <div className="shopcar">
                <div className='shopcar-header'>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => go(-1)}
                        >购物车(XXX)
                    </NavBar>
                </div>
                <div className='bgbox'></div>
                <div className="goods-list">
                    <ul>
                        <li>
                            <div className="img">
                                <img src=""/>
                            </div>
                            <div className="intro">
                                <h3>XXXXXXX</h3>
                                <p>XXXXXX</p>
                                <p>
                                <span className="s1">价格</span>&nbsp;x&nbsp;
                                <span className="s2">数量</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <AppFooter></AppFooter>
            </div>
        )
    }
}
export default Shopcar