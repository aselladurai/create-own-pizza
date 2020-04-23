import React from 'react';
import '../style/style.css';
import pzb_crust_pan from '../assets/images/pizza_builder/crust_pan_NoFinish.webp';
import pzb_crust_ht from '../assets/images/pizza_builder/crust_ht_NoFinish.webp';
import pzb_crust_thin from '../assets/images/pizza_builder/crust_thin_NoFinish.webp';
import pzb_cheese_ml from '../assets/images/pizza_builder/cheese_mozz_ML.webp'
import pzb_sauce_cm from '../assets/images/pizza_builder/sauce_Marinara_ML.webp'
import pzb_sauce_cgp from '../assets/images/pizza_builder/sauce_CreamyGarlicParm_ML.webp'

const PizzaImage = (props) => {
    let pbObj = props.pbInfo;
    console.log(pbObj);
    let crust = pbObj.crust;
    let sauce = pbObj.sauce;
    let cheese = pbObj.cheese;

    if(pbObj.sauce === undefined) return <div></div>;

    return (
        <div>
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
                
            </div>
        </div>
    )
}

export default PizzaImage;