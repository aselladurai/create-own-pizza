import React, { Fragment, useState, useEffect } from 'react';
import '../../style/style.css';
import cheese_moz from '../../assets/images/pizza_type/icon_cheese_Mozzarella.webp';
import objPizzaBuilder from '../../assets/labels/labels';
import Topping from './Topping';
import mushroom_icon from '../../assets/images/toppings/icon_topping_Mushroom.webp';
import spinach_icon from '../../assets/images/toppings/icon_topping_Spinach_fresh.webp';
import onion_icon from '../../assets/images/toppings/icon_topping_Onion_Red.webp';
import olive_icon from '../../assets/images/toppings/icon_topping_Olive_black.webp';
import greenpepper_icon from '../../assets/images/toppings/icon_topping_GreenBellPepper.webp';
import bananapepper_icon from '../../assets/images/toppings/icon_topping_BananaPepper.webp';
import pineapple_icon from '../../assets/images/toppings/icon_topping_Pineapple.webp';
import jalapeno_icon from '../../assets/images/toppings/icon_topping_Jalapeno.webp';
import tomato_icon from '../../assets/images/toppings/icon_topping_Tomato.webp';
import mushroom_reg from '../../assets/images/toppings/topping_Mushroom_ML_reg.webp'

const ToppingList = (props) => { 
    const objToppingList = [
        {
            Id: 'MUSHROOM',
            iconImage: mushroom_icon,
            toppingName: objPizzaBuilder.objToppings.lblMushrooms,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'L'
        },
        {
            Id: 'SPINACH',
            iconImage: spinach_icon,
            toppingName: objPizzaBuilder.objToppings.lblRoastedSpinach,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'R'
        },
        {
            Id: 'ONION',
            iconImage: onion_icon,
            toppingName: objPizzaBuilder.objToppings.lblRedOnions,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'W'
        },
        {
            Id: 'OLIVE',
            iconImage: olive_icon,
            toppingName: objPizzaBuilder.objToppings.lblBlackOlives,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'L'
        },
        {
            Id: 'GREEN_PEPPER',
            iconImage: greenpepper_icon,
            toppingName: objPizzaBuilder.objToppings.lblGreenPeppers,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'R'
        },
        {
            Id: 'BANANA_PEPPER',
            iconImage: bananapepper_icon,
            toppingName: objPizzaBuilder.objToppings.lblBananaPeppers,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'W'
        },
        {
            Id: 'PINEAPPLE',
            iconImage: pineapple_icon,
            toppingName: objPizzaBuilder.objToppings.lblPineapple,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'L'
        },
        {
            Id: 'JALAPENO',
            iconImage: jalapeno_icon,
            toppingName: objPizzaBuilder.objToppings.lblJalapenoPeppers,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'R'
        },
        {
            Id: 'TOMATO',
            iconImage: tomato_icon,
            toppingName: objPizzaBuilder.objToppings.lblRomaTomatoes,
            toppingDesc: '',
            isSelected: false,
            Amount: '',
            toppingLRW: 'W'
        }
    ]

    const [toppingList, setToppingList] = useState({
        ...objToppingList
    })
    
    useEffect(() => {
        
    }, [])
    const updatePizzaBuilder = (toppingInfo) => {
        let list = toppingList;
        for(let item in list) {
            if(list[item].Id === toppingInfo.Id) {
                list[item].isSelected = toppingInfo.IsSelected
                list[item].toppingLRW = toppingInfo.LRW
                list[item].Amount = toppingInfo.Amount
            }
        }
        setToppingList({
            ...list
        })
        props.updatePB(toppingList);
    }
    
    return (
        <div className="toppingList">
            {
                objToppingList.map((toppingItem, i) => {
                    return <Topping key={i} 
                    Id={toppingItem.Id}
                    imageUrl={toppingItem.iconImage} 
                    toppingName={toppingItem.toppingName} 
                    toppingDesc={toppingItem.toppingDesc} 
                    isSelected={toppingItem.isSelected}
                    toppingLRW={toppingItem.toppingLRW} 
                    updateParent={updatePizzaBuilder}/>
                })
            }
        </div>
    )
}

export default ToppingList;