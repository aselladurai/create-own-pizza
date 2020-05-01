import React, {useState, useEffect} from 'react';
import '../style/style.css';
import pzb_crust_pan from '../assets/images/pizza_builder/crust_pan_NoFinish.webp';
import pzb_crust_ht from '../assets/images/pizza_builder/crust_ht_NoFinish.webp';
import pzb_crust_thin from '../assets/images/pizza_builder/crust_thin_NoFinish.webp';
import pzb_cheese_ml from '../assets/images/pizza_builder/cheese_mozz_ML.webp'
import pzb_sauce_cm from '../assets/images/pizza_builder/sauce_Marinara_ML.webp'
import pzb_sauce_cgp from '../assets/images/pizza_builder/sauce_CreamyGarlicParm_ML.webp'


import pzb_crust_pan_per from '../assets/images/pizza_builder/crust_ppp_NoFinish.webp';
import pzb_cheese_ml_per from '../assets/images/pizza_builder/cheese_mozz_ppp.webp'
import pzb_sauce_cm_per from '../assets/images/pizza_builder/sauce_Marinara_ppp.webp'
import pzb_sauce_cgp_per from '../assets/images/pizza_builder/sauce_CreamyGarlicParm_ppp.webp'

import { mushroom_reg, spinach_reg, onions_reg, olives_reg, green_pepper_reg, 
        banana_pepper_reg, pineapple_reg, jalapeno_reg, tomato_reg,
        mushroom_extra, spinach_extra, onions_extra, olives_extra, green_pepper_extra,
        banana_pepper_extra, pineapple_extra, jalapeno_extra, tomato_extra } from '../constants/image';
         

const PizzaImage = (props) => {
    let pbObj = props.pbInfo;
    let crust = pbObj.crust;
    let sauce = pbObj.sauce;
    let cheese = pbObj.cheese;
    let toppingList = props.toppings;
    let mushroomTopping = '';
    let spinachTopping = '';
    let onionTopping = '';
    let oliveTopping = '';
    let greenPepperTopping = '';
    let bananaPepperTopping = '';
    let pineappleTopping = '';
    let jalapenoTopping = '';
    let tomatoTopping = '';
    
    if(pbObj.sauce === undefined) return <div></div>;
    console.log(toppingList);
    for(let [key, val] of Object.entries(toppingList)) {
        if(val.Id === 'MUSHROOM') {
            console.log(val.toppingLRW);
            let LRW_class = val.toppingLRW === 'L' ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                mushroomTopping = <img className={`'pb-topping-mushroom-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? mushroom_extra : mushroom_reg} alt="Mushroom Toppings" />
            }
        }
        if(val.Id === 'SPINACH') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                spinachTopping = <img className={`pb-topping-spinach-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? spinach_extra : spinach_reg} alt="Spinach Toppings" />
            }
        }
        if(val.Id === 'ONION') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                onionTopping = <img className={`pb-topping-onion-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? onions_extra : onions_reg} alt="Onion Toppings" />
            }
        }
        if(val.Id === 'OLIVE') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                oliveTopping = <img className={`pb-topping-olive-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? olives_extra : olives_reg} alt="Olive Toppings" />
            }
        }
        if(val.Id === 'GREEN_PEPPER') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                greenPepperTopping = <img className={`pb-topping-green-pepper-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? green_pepper_extra : green_pepper_reg} alt="Green pepper Toppings" /> 
            }
        }
        if(val.Id === 'BANANA_PEPPER') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                bananaPepperTopping = <img className={`pb-topping-banana-pepper-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? banana_pepper_extra : banana_pepper_reg} alt="Banana pepper Toppings" />
            }
        }
        if(val.Id === 'PINEAPPLE') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                pineappleTopping = <img className={`pb-topping-pineapple-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? pineapple_extra : pineapple_reg} alt="Pineapple Toppings" />
            }
        }
        if(val.Id === 'JALAPENO') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                jalapenoTopping = <img className={`pb-topping-jalapeno-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? jalapeno_extra : jalapeno_reg} alt="Jalapeno Toppings" />
            }
        }
        if(val.Id === 'TOMATO') {
            let LRW_class = (val.toppingLRW === 'L') ? 'topping-left' : val.toppingLRW === 'R' ? 'topping-right' : '';
            if(val.isSelected) {
                tomatoTopping = <img className={`pb-topping-tomato-img toppings ${LRW_class}`} src={val.Amount === 'Extra' ? tomato_extra : tomato_reg} alt="Tomato Toppings" />
            }
        }
    }


    return (
        <div className="pizza-image-container">
            {
                crust.size !== 'Personal' ?  
            
                    <div className="pizza-image">
                        {
                            crust.isPanPizza ? <img className="pb-crust-pan-img" src={pzb_crust_pan} alt="Pan crust" /> :''
                        }
                        {
                            crust.isHandTossed ? <img className="pb-crust-ht-img" src={pzb_crust_ht} alt="Hand tossed crust" /> :''
                        }
                        {
                            crust.isThinCrispy ? <img className="pb-crust-thin-img" src={pzb_crust_thin} alt="Thin crust" /> :''
                        }
                        {
                            cheese.cheeseAmount !== 'None' ? <img className="pb-cheese-ml-img" src={pzb_cheese_ml} alt="Cheese" />: ''
                        }
                        {
                            (sauce.sauceType === 'CLASSIC MARINARA' && sauce.amount !== 'None') ? <img className="pb-sauce-cm-img" src={pzb_sauce_cm} alt="Classic marinara" /> : ''
                        }
                        {
                            (sauce.sauceType === 'CREAMY GARLIC PARAMESAN' && sauce.amount !== 'None') ? <img className="pb-sauce-cgp-img" src={pzb_sauce_cgp} alt="Creamy garlic paramesan" /> : ''
                        }
                        
                        {mushroomTopping} {spinachTopping} {onionTopping}
                        {oliveTopping} {greenPepperTopping} {bananaPepperTopping} 
                        {pineappleTopping} {jalapenoTopping} {tomatoTopping}
                        
                    </div>
                    :
                    <div className="pizza-image">
                        {
                            crust.isPanPizza ? <img className="pb-crust-pan-img" src={pzb_crust_pan_per} alt="Pan crust" /> :''
                        }
                        {
                            cheese.cheeseAmount !== 'None' ? <img className="pb-cheese-ml-img" src={pzb_cheese_ml_per} alt="Cheese" />: ''
                        }
                        {
                            (sauce.sauceType === 'CLASSIC MARINARA' && sauce.amount !== 'None') ? <img className="pb-sauce-cm-img" src={pzb_sauce_cm_per} alt="Classic marinara" /> : ''
                        }
                        {
                            (sauce.sauceType === 'CREAMY GARLIC PARAMESAN' && sauce.amount !== 'None') ? <img className="pb-sauce-cgp-img" src={pzb_sauce_cgp_per} alt="Creamy garlic paramesan" /> : ''
                        }
                        {mushroomTopping} {spinachTopping} {onionTopping}
                        {oliveTopping} {greenPepperTopping} {bananaPepperTopping} 
                        {pineappleTopping} {jalapenoTopping} {tomatoTopping}
                    </div>
            }
        </div>
    )
}

export default PizzaImage;