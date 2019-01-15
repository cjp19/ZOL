import React,{Component} from 'react'
import './index.scss'
import {GrouptypeContent} from '../../../../modules/group'
class Content extends Component{
    constructor(props){
        super(props)
        this.state = {
            Content:[]
        }
    }
    componentWillMount(){
        let {getContent,typeContent,data} = this.props
        // if(data){
        //     getContent(data.slice(3))
        // }else{
        //     getContent(1)
        // }
        getContent()
        
        this.setState({
            Content:typeContent
        })
    }
    componentWillReceiveProps(props){
        let {data} = this.props;
        console.log('999999999',data);
        console.log('props.data',props.data)
        console.log('this.props.data',this.props.data)
       
        if( props.data.slice(3) !== this.props.data.slice(3)){
            
            console.log('object111',props);
            let {getContent,typeContent,data} =props
            // if(data){
            //     getContent(data.slice(3))
            // }else{
            //     getContent(1)
            // }
            getContent()
            
            // console.log('this.props',this.props);
            // console.log('this.data',typeContent);
            // console.log('type',this.props.data);
            
            this.setState({
                Content:typeContent
            })
        }
    }
    
    renderContent(){
        let {Content} = this.state
        console.log(Content)
        let {data} = this.props
        console.log('55555',Content[0])
        let state = data.slice(3)-1
        let content1 = Content[0]
        console.log('state',Content[state])
        let Contents = Content[state]
        // if(state === 1){
        //     return (
        //         <ul>
        //         {content1.map((item) => {
        //             return (
        //                 <li key = {item.id}>
        //                         <img src={item.imgUrl} alt=""/>
        //                         <span>{item.title}</span>   
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     )
        // }
        if(Contents){
            return (
                <ul>
                {Contents.map((item) => {
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
        
    }
    render(){
        return (
            <div className='type-content'>
               {this.renderContent()}
            </div>
        )
    }
}

export default GrouptypeContent(Content)