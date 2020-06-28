import axios from 'axios'
const qs = require('querystring')

import EndPoints from './APIs'

const validateStatus = status => status >= 200 && status <= 400;

EndPoints.forEach(groups =>{
    let instance = axios.create({
        baseURL: groups.baseUrl || process.env.NEXT_PUBLIC_HOST,
        timeout: +process.env.NEXT_PUBLIC_TIMEOUT,
        validateStatus: validateStatus,
        maxRedirects: 0,
        transformRequest: [data => qs.stringify(data)],
        withCredentials: true
    })

    groups.endPoints.forEach(item => {
        Request[item.key] = (params, body) => request(item.url, item.method,
            params, body, item.headers || groups.headers, instance)
            .then(response =>{
                if(response.status === 301 || response.status === 302){
                    return response
                }
                return response.data
            })
            .catch(error => {
                console.log('_-------------------- API error', error)
                return error
            })
    })
})

export async function request(url, method, params = {}, data, headers, instance) {
    const optionalParams = {
        ...params,
        optionalClient: "PSA"
    }
    return await instance
        .request({
            url,
            method,
            params : optionalParams,
            data,
            headers
        })
}


export default Request
