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
    }
}
