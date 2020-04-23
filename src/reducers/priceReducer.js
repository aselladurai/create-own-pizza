import { priceObj, GET_TOTAL_PRICE } from '../constants/price';
import { Med, Lg, Per } from '../constants/size';


const priceReducer = (state = {
        crust: {
            size: Med,
            desc: '',
            isPanPizza: false,
            isHandTossed: true,
            isThinCrispy: false,
        },
        sauce: {
            sauceType: '', //cm, cgp, bbq
            amount: '',
            desc: '',
            isExtra: '',
            isRegular: '',
            isLight: '',
            isNone: '',
        },
        cheese: {
            isExtraCheese: '',
            extraCheesePrice: '',
            cheeseAmount: ''
        },
        totalPrice: 0
    }, action) => {
    switch(action.type) {
        case GET_TOTAL_PRICE:
            let params = action.payload;
            let totalPrice = priceObj.base_price;
            
            if(params.crust.isHandTossed) {
                if(params.crust.size === Med)
                    totalPrice = totalPrice + priceObj.ht_med_price;
                if(params.crust.size === Lg)
                    totalPrice = totalPrice + priceObj.ht_lg_price;
            }
            if(params.crust.isPanPizza) {
                if(params.crust.size === Med)
                    totalPrice = totalPrice + priceObj.pan_med_price;
                if(params.crust.size === Lg)
                    totalPrice = totalPrice + priceObj.pan_lg_price;
                if(params.crust.size === Per) {
                    totalPrice = totalPrice - priceObj.pan_ps_price;
                }
            }
            if(params.crust.isThinCrispy) {
                if(params.crust.size === Med)
                    totalPrice = totalPrice + priceObj.thin_med_price;
                if(params.crust.size === Lg)
                    totalPrice = totalPrice + priceObj.thin_lg_price;
            }
            if(params.cheese.isExtraCheese) {
                if(params.crust.size === Lg)
                    totalPrice = totalPrice + priceObj.extra_cheese_lg_price;
                if(params.crust.size === Med)
                    totalPrice = totalPrice + priceObj.extra_cheese_med_price;
                if(params.crust.size === Per)
                    totalPrice = totalPrice + priceObj.extra_cheese_per_price;
            }
            state = {
                ...params,
                totalPrice
            }
            console.log(state);
            break;
        default: break;
    }
    
    return state;
}

/*
const priceReducer = (state = {
    desc: '',
    isPanPizza: false,
    isHandTossed: false,
    initialBasePrice: priceObj.base_price,
    totalPrice: 0.00,
    size: priceObj.size
}, action) => {
switch(action.type) {
    case GET_TOTAL_PRICE:
        let params = action.payload;
        let totalPrice = priceObj.base_price;
        state.desc = params.desc;
        //console.log(params.crust.desc);
        if(params.isHandTossed) {
            if(params.size === Med)
                totalPrice = totalPrice + priceObj.ht_med_price;
            if(params.size === Lg)
                totalPrice = totalPrice + priceObj.ht_lg_price;
        }
        if(params.isPanPizza) {
            if(params.size === Med)
                totalPrice = totalPrice + priceObj.pan_med_price;
            if(params.size === Lg)
                totalPrice = totalPrice + priceObj.pan_lg_price;
            if(params.size === Per) {
                totalPrice = totalPrice - priceObj.pan_ps_price;
            }
        }
        if(params.isThinCrispy) {
            if(params.size === Med)
                totalPrice = totalPrice + priceObj.thin_med_price;
            if(params.size === Lg)
                totalPrice = totalPrice + priceObj.thin_lg_price;
        }
        if(params.isExtraCheese) {
            //console.log(totalPrice);
            if(params.size === Lg)
                totalPrice = totalPrice + priceObj.extra_cheese_lg_price;
            if(params.size === Med)
                totalPrice = totalPrice + priceObj.extra_cheese_med_price;
            if(params.size === Per)
                totalPrice = totalPrice + priceObj.extra_cheese_per_price;
                
            //console.log('is extra cheese selected..', totalPrice);
        }
        if(!params.isExtraCheese) {
            totalPrice = totalPrice - priceObj.extra_cheese_lg_price;
        }
        //console.log(params);
        state = {
            ...params,
            totalPrice
        }
        //console.log('params: ', params);
        break;
    default: break;
}
return state;
}*/

export default priceReducer;
