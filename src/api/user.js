// import API from './api'
import { appConfigs } from './../configs'
import { feeAjax } from './feeAjax'

// const coreAPI = new API(appConfigs.getAPIUrl(appConfigs.apiDomain.auth))
export const userAPI = {
    login(userName, password) {
        let data = {
            userName: userName,
            password: password
        }
        let options = {
            method: 'POST',
            crossDomain: true,
            data: data,
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.auth) + 'login',
            headers: {}
        }
        return feeAjax(options)
        // return coreAPI.post('login', data)
    },
    register(userName, password, firstName, email) {
        let data = {
            userName: userName,
            password: password,
            firstName:firstName,
            email:email
        }
        let options = {
            method: 'POST',
            crossDomain: true,
            data: data,
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.auth) + 'create',
            headers: {}
        }
        return feeAjax(options)
        // return coreAPI.post('login', data)
    },
    testHelthToken() {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'GET',
            crossDomain: true,
            data:{},
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.auth) + 'testJWT',
            headers: {
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    },
    getAllUserInfo() {
        let options = {
            method: 'GET',
            crossDomain: true,
            data: {
                id:"all"
            },
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.auth) + 'get-detail',
            headers: {}
        }
        return feeAjax(options)
    },
    updateUserInfo(data){
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'POST',
            crossDomain: true,
            data: data,
            
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.auth) + 'update',
            headers: {
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    },
    resetPassword(userName){
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'POST',
            crossDomain: true,
            data: {
                userName:userName
            },
            
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.auth) + 'reset-password',
            headers: {
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    }
}
