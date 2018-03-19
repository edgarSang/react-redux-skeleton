import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    status: 'INIT',
    Message: '',
}


export default function test(state, action) {
    if(typeof state === "undefined") {
        state = initialState;
    }

    switch(action.type) {
            case types.TEST_DO:
                return update(state, {
                    status: { $set: 'WAITING '}
                });
            case types.TEST_SUCCESS:
                return update(state, {
                    status: { $set: 'SUCCESS' },
                    Message: { $set: action.Message },
                });
            case types.TEST_FAILURE:
                return update(state, {
                    Message: { $set: 'FAILURE' }
                });
            default:
                return state;
    }
}