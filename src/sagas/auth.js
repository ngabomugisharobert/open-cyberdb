import {call, put, takeLatest} from 'redux-saga/effects'
import {DCore} from '../config'


import {
    SIGNIN,
    hasSignedIn
} from '../actions'


function * signinSaga (payload){
    try{
       const response = yield call(DCore.post,'/login', payload.data)
       yield put(hasSignedIn({username:payload.data.username, password:payload.data.password}))
    }catch(e){
        yield put(hasSignedIn({username:payload.data.username, password:payload.data.password}))
    }
}


export function * authSaga(){
    yield takeLatest (SIGNIN, signinSaga)
}