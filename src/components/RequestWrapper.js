import axios from 'axios';

const isHandlerEnabled = (config={}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

const responseHandler = (response) => {
    console.log('start response handle');
    console.log(response);
    if(response.data["status"]["code"] === 0){
        return response
    }else {
        console.log('there is something wrong with request properties')
        errorHandler(response)
    }
}

const errorHandler = (error) => {

    console.log('start error handle');
    console.log('this is error that passes to error handler',error)
    if (isHandlerEnabled(error.config)) {
        //can show alert and toast
        console.log(error.response.status)
        return  error
    }
    console.log('error rejected by promise');
    return Promise.reject({ ...error })
}

axios.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error)
)

export default class RequestWrapper {
    sendGetRequest(requestURL) {
      return   axios.get(requestURL)
            .then(function(response) {
                console.log('done get request');
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            });
    }
    sendPostRequest(requestURL,jsonBody) {

        return  axios.post(requestURL,jsonBody)
            .then(function(response) {
                console.log('done post request');
                console.log(response)
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}