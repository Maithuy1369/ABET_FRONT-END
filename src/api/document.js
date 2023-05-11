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
    createDocument(name, assessorId, verifierId, evaluateField, identifierId, listStudent, soDocument) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        
        let options = {
            method: 'POST',
            crossDomain: true,
            'contentType': 'application/json',
            data: {
                name: name,
                assessorId: assessorId,
                VerifierId: verifierId,
                evaluateField: evaluateField,
                identifierId: identifierId,
                listStudent: listStudent,
                sODocumentId:soDocument,
            },
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.document) + 'create-report',
            headers: {
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        console.log(options)
        return feeAjax(options)
    },
    getDetailDocument(id) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        
        let options = {
            method: 'GET',
            crossDomain: true,
            'contentType': 'application/json',
            data: {},
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.document) + 'get-document/'+id,
            headers: {
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        console.log(options)
        return feeAjax(options)
    },
    deleteDocument(id) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'DELETE',
            'contentType': 'application/json',
            data: {id:id},
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.document) + 'delete-document',
            headers: {
                'Accept': 'application/json',
          'Content-type': 'application/json',
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    },
    editDocument(data) {
        let feeUserInfo = JSON.parse(localStorage.getItem('feeUserInfo'))
        let options = {
            method: 'PUT',
            'contentType': 'application/json',
            data: data,
            url: appConfigs.getAPIUrl(appConfigs.apiDomain.document) + 'submit-report',
            headers: {
                'Accept': 'application/json',
          'Content-type': 'application/json',
                authorization: 'Bearer '+ feeUserInfo.token
            }
        }
        return feeAjax(options)
    }
}
