import { GET_TOTAL_PRICE } from '../constants/price';

/*export function getTotalPrice(params){
    return dispatch => {
        dispatch(returnTotalPrice(params))
    }
}

function returnTotalPrice(params) {
    return {
        type: GET_TOTAL_PRICE,
        payload: params 
    }
}
*/

export const getTotalPrice = (params) => {
    //console.log('actions: ', params);
    return {
        type: GET_TOTAL_PRICE,
        payload: params 
    }
}