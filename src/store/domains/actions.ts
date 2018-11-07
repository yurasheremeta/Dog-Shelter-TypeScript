
import {
     ActionTypeKeys,
     GetImageAction, 
     GetImageRejectedAction, 
} from './actionTypes';
import * as api from './api';

export const getImage = (): GetImageAction => ({
    type: ActionTypeKeys.GET_IMAGE,
    payload: api.getImages(),
});

export const erorrGettingImage = (): GetImageRejectedAction => ({
    type: ActionTypeKeys.GET_IMAGE_REJECTED,
});