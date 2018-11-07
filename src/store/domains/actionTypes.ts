export enum ActionTypeKeys {
    GET_IMAGE = 'GET_IMAGE',
    GET_IMAGE_FULFILLED = 'GET_IMAGE_FULLFILED',
    GET_IMAGE_REJECTED = 'GET_IMAGES_REJECTED',
}

export interface GetImageAction {
    readonly type: ActionTypeKeys.GET_IMAGE;
    readonly payload: Promise<object>;
 
}

export interface GetImageFulfieldAction {
   readonly type: ActionTypeKeys.GET_IMAGE_FULFILLED;

}

export interface GetImageRejectedAction {
   readonly type: ActionTypeKeys.GET_IMAGE_REJECTED;
}

export type GetImageTypes =
| GetImageFulfieldAction
| GetImageRejectedAction;