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

import mushroom_reg from '../assets/images/toppings/topping_Mushroom_ML_reg.webp'
import spinach_reg from '../assets/images/toppings/topping_Spinach_Fresh_ML_reg.webp'
import onions_reg from '../assets/images/toppings/topping_Onion_red_ML_reg.webp'
import olives_extra from '../assets/images/toppings/topping_Olives_black_ML_extra.webp'
import green_pepper_reg from '../assets/images/toppings/topping_GreenBellPepper_ML_reg.webp'
import banana_pepper_reg from '../assets/images/toppings/topping_BananaPepper_ML_reg.png'
import pineapple_reg from '../assets/images/toppings/topping_Pineapple_ML_reg.webp'
import jalapeno_reg from '../assets/images/toppings/topping_Jalepeno_ML_reg.webp'
import tomato_reg from '../assets/images/toppings/topping_Tomato_ML_reg.png'

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

    for(let [key, val] of Object.entries(toppingList)) {
        if(val.Id === 'MUSHROOM') {
            if(val.isSelected) {
                mushroomTopping = <img className="pb-topping-mushroom-img toppings" src={mushroom_reg} alt="Mushroom Toppings" />
            }
        }
        if(val.Id === 'SPINACH') {
            if(val.isSelected) {
                spinachTopping = <img className="pb-topping-spinach-img toppings" src={spinach_reg} alt="Spinach Toppings" />
            }
        }
        if(val.Id === 'ONION') {
            if(val.isSelected) {
                onionTopping = <img className="pb-topping-onion-img toppings" src={onions_reg} alt="Onion Toppings" />
            }
        }
        if(val.Id === 'OLIVE') {
            if(val.isSelected) {
                oliveTopping = <img className="pb-topping-olive-img toppings" src={olives_extra} alt="Olive Toppings" />
            }
        }
        if(val.Id === 'GREEN_PEPPER') {
            if(val.isSelected) {
                greenPepperTopping = <img className="pb-topping-green-pepper-img toppings" src={green_pepper_reg} alt="Green pepper Toppings" /> 
            }
        }
        if(val.Id === 'BANANA_PEPPER') {
            if(val.isSelected) {
                bananaPepperTopping = <img className="pb-topping-banana-pepper-img toppings" src={banana_pepper_reg} alt="Banana pepper Toppings" />
            }
        }
        if(val.Id === 'PINEAPPLE') {
            if(val.isSelected) {
                pineappleTopping = <img className="pb-topping-pineapple-img toppings" src={pineapple_reg} alt="Pineapple Toppings" />
            }
        }
        if(val.Id === 'JALAPENO') {
            if(val.isSelected) {
                jalapenoTopping = <img className="pb-topping-jalapeno-img toppings" src={jalapeno_reg} alt="Jalapeno Toppings" />
            }
        }
        if(val.Id === 'TOMATO') {
            if(val.isSelected) {
                tomatoTopping = <img className="pb-topping-tomato-img toppings" src={tomato_reg} alt="Tomato Toppings" />
            }
        }
    }


    return (
        <div>
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
                        {spinachTopping} {onionTopping} {oliveTopping} {greenPepperTopping}
                        {bananaPepperTopping} {pineappleTopping} {jalapenoTopping} {tomatoTopping}
                        
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
                        {spinachTopping} {onionTopping} {oliveTopping} {greenPepperTopping}
                        {bananaPepperTopping} {pineappleTopping} {jalapenoTopping} {tomatoTopping}
                    </div>
            }
        </div>
    )
}

export default PizzaImage;