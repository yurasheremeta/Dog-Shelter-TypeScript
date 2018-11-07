import {
    // State,
    DogData,
} from './types';
import{
    ActionTypeKeys,
    GetImageFulfieldAction,
    GetImageRejectedAction,
    GetImageTypes,
} from './actionTypes';

const dataInitialState: DogData = {
    isLoading: false,
    breeds: [],
};

const reducer = (state: DogData = dataInitialState, action: GetImageTypes) => {
    switch(action.type) {
        case ActionTypeKeys.GET_IMAGE_FULFILLED: {
            return ({
                ...state,
                isLoading: false,
                breeds: action.payload.message,
            });
       
        }
        case ActionTypeKeys.GET_IMAGE_REJECTED: {
            return ({
                ...state,
                isLoading: true,
            })
        }
        default:
        return state;
    }
}

export default reducer;