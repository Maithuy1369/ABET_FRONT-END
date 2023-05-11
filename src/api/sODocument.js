// import API from './api'
import { appConfigs } from './../configs'
import { feeAjax } from './feeAjax'

export const sODocumentAPI = {
    createSODocument(name, description, identifier) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let data = {
            name: name,
            description: description,
            identifierId: JSON.stringify(identifier)
        }
        let options = {
            method: 'POST',
            'contentType': 'application/json',
            data: data,
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.sODocument) + 'create-so',
            headers: {
                'Accept': 'application/json',
          'Content-type': 'application/json',
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    },
    getAllSODocument() {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'GET',
            'contentType': 'application/json',
            data: {},
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.sODocument) + 'get-all-so',
            headers: {
                'Accept': 'application/json',
          'Content-type': 'application/json',
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    },
    getDetailSODocument(id) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'GET',
            'contentType': 'application/json',
            data: {},
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.sODocument) + 'get-detail-so/'+id,
            headers: {
                'Accept': 'application/json',
          'Content-type': 'application/json',
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    },
    deleteDocument(id) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'DELETE',
            'contentType': 'application/json',
            data: {id:id},
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.sODocument) + 'delete-SO',
            headers: {
                'Accept': 'application/json',
          'Content-type': 'application/json',
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    }
    
}