import * as type from './type'
const actionCreator = {
    templateFun(){
        let action = {
            type: type.TEMPLATE
        }
        return action
    },
    templateFun1(payload){
        let action = {
            type: type.TEMPLATE,
            payload
        }
        return action
    },
    getUserName(username){
        return dispatch => {
            let action = {
                type: type.CHANGE_USERINFO,
                username
            }
            dispatch(action)
        }
    },
    loginPhone({phonenumber,codenumber,success,fail}){
        //登录 异步操作
        let phone = '123'
        let code = '123'
        return dispatch => {
            setTimeout(() => {
                if(phonenumber === phone && codenumber === code){
                    let action = {
                        type: type.CHANGE_USERINFO,
                        username: phonenumber
                    }
                    dispatch(action)
                    if(success) success()
                    localStorage.setItem('phonenumber',phonenumber)
                    return false
                }
                if(fail) fail()
            },1000)
        }
    },
    loginAccount({username,password,success,fail}){
        //登录 异步操作
        let name = 'cjp'
        let pass = '123'
        return dispatch => {
            if(username === name && password === pass){
                let action = {
                    type: type.CHANGE_USERINFO,
                    username: username
                }
                dispatch(action)
                if(success) success()
                return false
            }
            if(fail) fail()
        }
    },
    exitUser(){
        console.log('exitUser')
        let action = {
            type: type.EXIT_USERINFO,
            userInfo: null
        }
        return action
    }
}

export default actionCreator