import React, { Component } from 'react';
import { Home,Type,Shopcar,Mine,Detail} from './components/page'
import AppHeader from './components/common/AppHeader'
import AppFooter from './components/common/AppFooter'
import { Route,Switch,withRouter } from 'react-router-dom'
import {GroupUser} from './modules/group'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasHeader: true,
      hasFooter: true
    }
  }
  renderRoutes(){
    
    let { routes } = this.props;
    // console.log('asdfghfdsadfgh',routes);
    return routes.map( item => <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact}/>)
  }
  render() {
    let {hasHeader,hasFooter} = this.state
    return (
      <div className="App">
        {!hasHeader||<AppHeader></AppHeader>}
        <Switch>
          {this.renderRoutes()}
        </Switch>
        {!hasFooter||<AppFooter></AppFooter>}
      </div>
    );
  }
  componentWillReceiveProps(props){
    let {pathname} = props.location
    let arr = ['/mine/login','/detail/001','/shopcar','/detail/001/:id']
    if(arr.indexOf(pathname) > -1){
      this.setState({
        hasHeader: false,
        hasFooter: false
      })
    }else{
      this.setState({
        hasHeader: true,
        hasFooter: true
      })
    }
  }
}
App.defaultProps = {
  routes: [
    {
      id: 1,
      path:'/',
      component: Home,
      exact: true
    },
    {
      id: 2,
      path:'/type/:id',
      component: Type,
    },
    {
      id: 3,
      path:'/mine',
      component: Mine,
    },
    {
      id: 4,
      path:'/shopcar',
      component: Shopcar,
    },
    {
      id: 5,
      path: '/detail/:id',
      component: Detail
    }
    
  ]
}
export default withRouter(GroupUser(App));
