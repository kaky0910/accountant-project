import * as TYPES from './../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case TYPES.READ_UPLOADED_FILE:
            return action.payload

        default:
            return state;
    }
};