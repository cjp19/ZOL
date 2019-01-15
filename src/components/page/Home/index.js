import React,{Component} from 'react'
import './index.scss'
import { Carousel, WingBlank,Tabs, WhiteSpace } from 'antd-mobile';
import HomeList1 from './Home-list1'
import {GroupDetail} from '../../../modules/group'

class Home extends Component{
    constructor(props){
        super(props)
        
    }
    
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1', '2', '3'],
          });
        }, 100);
      }
      renderShowNavs(){
          let {showNavs} = this.props
          return (
              <ul>
                  {showNavs.map(item =>{
                      return (
                        <li key = {item.id}>
                            <img src={item.imgUrl} alt=""/>
                            <span>{item.title}</span>
                        </li>
                      )
                  })}
                  
              </ul>
          )
      }
    lunbo(){
        let {data} = this.props;
        return (
            <WingBlank>
                        <Carousel
                        autoplay={true}
                        infinite
                        
                        >
                        {data.map(val => (
                            <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', }}
                            >
                            <img
                                src={`images/t${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                
                                }}
                            />
                            </a>
                        ))}
                        </Carousel>
                    </WingBlank>
        )
    }
    TabExample(){
    let {tabs} = this.props;
    return (
        <div>
           
          <WhiteSpace />
          <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div style={{ backgroundColor: '#f3f3f3' }}>
              <HomeList1/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              手机太多不准显示
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              相机太差不准展示
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
              DIY
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
    )
        
      }
    renderasidegoods(){
        let {asidegoods} = this.props
        return (
            <ul>
                {asidegoods.map(item =>{
                    return (
                      <li key = {item.id}>
                            <img src={item.imgUrl} alt=""/>
                            <p>{item.intro}</p>
                            <span className="span1">{item.title}</span>
                            <span className="span2">去看看</span>
                      </li>
                    )
                })}
                
            </ul>
        )
    }
    render(){
        return (
            <div className="home">
                <div className='lunbo'>
                    {this.lunbo()}
                </div>
                <div className = 'ShowNavs'>
                    {this.renderShowNavs()}
                </div>
                <div className="bg-box"></div>
                <div className='goodStore'>
                    <div className="title">
                            <div className='name'>精选好店</div>
                            <div className="more">
                                更多 &gt;
                            </div>
                    </div>
                    <div className ='content'>
                        <ul>
                            <li>
                            <img src="images/hs1.png" alt=""/>
                            <div className="intro">
                                    <span>爱科生活</span>
                                    <div className="more">
                                        查看地址 &gt;
                                    </div>
                            </div>
                            </li>
                            <li>
                            <img src="images/hs2.png" alt=""/>
                            <div className="intro">
                                    <span>迪信通旗舰店</span>
                                    <div className="more">
                                        查看地址 &gt;
                                    </div>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-box"></div>
                <div className= 'asidegoods'>
                    <div className='title'>
                            <p>身边好物</p>
                            <span>身边好物就在这里</span>
                    </div>
                    <div className='content'>
                        {this. renderasidegoods()}
                    </div>
                </div>
                <div className='home-type'>
                    <div className='title'>
                    <p>精选优品<span>实体连锁店门店直供</span></p>
                    </div>
                    {this.TabExample()}
                </div>
            </div>
        )
    }
}
Home.defaultProps = {
    showNavs: [
        {
            id: 1,
            title: '团购',
            imgUrl: 'images/a1.png'
        },
        {
            id: 2,
            title: '本地优选',
            imgUrl: 'images/a2.png'
        },
        {
            id: 3,
            title: '维修',
            imgUrl: 'images/a3.png'
        },
        {
            id: 4,
            title: '领券',
            imgUrl: 'images/a4.png'
        },
        {
            id: 5,
            title: '手机',
            imgUrl: 'images/a5.png'
        },
        {
            id: 6,
            title: '电脑',
            imgUrl: 'images/a6.png'
        },
        {
            id: 7,
            title: 'DIY',
            imgUrl: 'images/a7.png'
        },
        {
            id: 8,
            title: '相机',
            imgUrl: 'images/a8.png'
        }   
    ],
    asidegoods:[
        {
            id:1,
            imgUrl:'images/aside1.jpg',
            intro:'Canon佳能还不错',
            title:'选GO套装不亏'
        },
        {
            id:2,
            imgUrl:'images/aside3.jpg',
            intro:'ai智能拍照好看不',
            title:'顺丰包邮，不花钱'
        },
        {
            id:3,
            imgUrl:'images/aside2.jpg',
            intro:'Canon佳能还不错',
            title:'选GO套装不亏'
        },
        {
            id:4,
            imgUrl:'images/aside4.jpg',
            intro:'Canon佳能还不错',
            title:'前后双摄，不花钱'
        }
        
    ],
    tabs : [
        { title: '电脑' },
        { title: '手机' },
        { title: '相机' },
        { title: 'DIY' }
      ],
      
        data: ['1', '2', '3']
   
}
export default GroupDetail(Home)