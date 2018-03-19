import {
    TEST_DO,
    TEST_SUCCESS,
    TEST_FAILURE,
} from './ActionTypes';
import axios from 'axios';

/* TEST */

export function testRequest(Msg) {
    return (dispatch) => {
            dispatch(test());

            return axios.post('http://127.0.0.1:8099/auth/test', { Msg })
            .then((response) => {
                dispatch(testSuccess(response.data.Message));
            }).catch((error) => {
                dispatch(testFailure());
            });
    };
}

export function test() {
    return {
        type: TEST_DO
    };
}

export function testSuccess(Message) {
    return {
        type: TEST_SUCCESS,
        Message
    };
}

export function testFailure() {
    return {
        type: TEST_FAILURE
    };
}
