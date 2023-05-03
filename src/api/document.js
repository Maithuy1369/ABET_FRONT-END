// import API from './api'
import { appConfigs } from './../configs'
import { feeAjax } from './feeAjax'

// const coreAPI = new API(appConfigs.getAPIUrl(appConfigs.apiDomain.auth))
export const documentAPI = {
    getAllPIBySOId(sOId) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        
        let options = {
            method: 'GET',
            crossDomain: true,
            'contentType': 'application/json',
            data: {},
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.document) + 'get-all-document-by-soId/' + sOId,
            headers: {
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        console.log(options)
        return feeAjax(options)
        // return coreAPI.post('login', data)
        
    },
}
