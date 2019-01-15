import React,{Component} from 'react'
import './index.scss'
import { NavBar, Icon } from 'antd-mobile';
import {GroupDetail} from '../../../modules/group'
import DetailBox from './DetailBox'

const qs = require('querystring')

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : null
         }
    }
    componentWillMount(){
        console.log('sdsadfsdfsf',this.props);
        let {getDetail,detailData} = this.props
        console.log('555555555555555555555',this.props.location.search.slice(4))
        let urlObj = this.props.location.search.slice(4)
        getDetail(urlObj)
        this.setState({
            data : detailData
        })
        console.log('dedede',detailData)
        console.log('this,state',this.state)
    }
    
    componentWillReceiveProps(props){
        let id = this.props.location.search.slice(10)
        let {detailData,getDetail} = props
        // getDetail(id)
        console.log('qwqwqwqw',detailData)
        this.forceUpdate();
    }
    render(){
        let {go} = this.props.history
        let {detailData} = this.props
        return (
            <div className="detail-box">
            <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => go(-1)}
                >商品详情页</NavBar>
                <DetailBox data = {detailData}/>
            </div>
        )
    }
}
export default GroupDetail(Detail)