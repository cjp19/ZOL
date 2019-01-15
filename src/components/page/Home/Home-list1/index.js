import React,{Component} from 'react'
import './index.scss'
import {GroupListOne} from '../../../../modules/group'
import {Link} from 'react-router-dom'
class HomeList1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            listone:[]
        }
    }
    componentWillMount(){
        let {getListOne,listone} = this.props
        getListOne()
        // console.log('getlistone',listone);
        this.setState({
            listone:listone
        })
    }
    renderItem(){
        let {listone} = this.props
        if(listone){
            return listone.map((item) => {
                return (
                    <li key={item.goods_id}>
                            <Link className = 'img-box'
                                to = {{
                                    pathname: 'detail/001',
                                    search: `?id=${item.goods_id}`
                                }}
                            >
                                <img src={item.goods_pic} alt=""/>
                                <div className = 'goods-info'>
                                   
                                        <span>满赠</span>
                                       {item.goods_name}  
                                </div>
                                <p className = 'p'>￥<span>{item.goods_price}</span></p>
                            </Link>
                    </li>
                )
            })
        }
        
    }
    render(){
        return (
            <div className = 'Home-list1-box'>
                <ul>
                    {this.renderItem()}
                    {/* <li>
                        <a href="javascript:;">
                            <img src="" alt=""/>
                            <div className = 'goods-info'>
                               
                                    <span>满赠</span>
                                   XXX   
                            </div>
                            <p className = 'p'>￥<span>XXXXX</span></p>
                        </a>
                    </li> */}

                </ul>
            </div>
        )
    }
}
export default GroupListOne(HomeList1)