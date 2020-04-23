import React, { Fragment, useState, useEffect } from 'react';
import '../../style/style.css';
import cheese_moz from '../../assets/images/pizza_type/icon_cheese_Mozzarella.webp';
import objPizzaBuilder from '../../assets/labels/labels';

const Cheese = (props) => {

    const EXTRA = 'Extra';
    const REGULAR = 'Regular';
    const LIGHT = 'Light';
    const NONE = 'None';
    const [cheeseInfo, setCheeseInfo] = useState({
        amount: REGULAR,
        desc: objPizzaBuilder.objCheese.regularDesc
    });
    
    const btnCheeseExtraClick = () => {
        setCheeseInfo({
            amount: EXTRA,
            desc: objPizzaBuilder.objCheese.extraDesc
        });
        props.btnCheeseExtraClick(EXTRA);
    }

    const btnCheeseRegularClick = () => {
        setCheeseInfo({
            amount: REGULAR,
            desc: objPizzaBuilder.objCheese.regularDesc
        });
        props.btnCheeseRegularClick(REGULAR);
    }

    const btnCheeseLightClick = () => {
        setCheeseInfo({
            amount: LIGHT,
            desc: objPizzaBuilder.objCheese.lightDesc
        });
        props.btnCheeseLightClick(LIGHT);
    }

    const btnCheeseNoneClick = () => {
        setCheeseInfo({
            amount: NONE,
            desc: objPizzaBuilder.objCheese.noneDesc
        });
        props.btnCheeseNoneClick(NONE);
    }

    return (
        <Fragment>
            <div className="cheese-header pizza-type">
                <span>Cheese</span> {cheeseInfo.desc}
            </div>
            <div className="pizza-type-container">
                <div className="cm-pizza-container">
                    <div className="img-wrapper">
                        <img src={cheese_moz} alt="Classic Marinara" /*onClick={cmClick}*/ />
                    </div>
                    {
                        cheeseInfo !== NONE ? <i className="fas fa-check-circle"></i> : ''
                    }
                    <div className="cm-pizza-desc">
                        <span>{objPizzaBuilder.objCheese.regCheese}</span>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="sauce-amount-container">
                <div className="sauce-amount-text">Amount: <span>{cheeseInfo.amount}</span></div>
                <div className="sauce-extra-btn-container">
                    <button type="button" onClick={btnCheeseExtraClick} className="btn-sauce-extra btn btn-outline-secondary">
                        {objPizzaBuilder.objCheese.btnExtra} <small className="sm">+${props.extraCheesePrice}</small>
                    </button>
                </div>
                <div className="sauce-medium-btn">
                    <button type="button" onClick={btnCheeseRegularClick} className="btn-sauce-medium btn btn-outline-secondary">
                        {objPizzaBuilder.objCheese.btnRegular}
                    </button>
                </div>
                <div className="sauce-light-btn">
                    <button type="button" onClick={btnCheeseLightClick} className="btn-sauce-medium btn btn-outline-secondary">
                        {objPizzaBuilder.objCheese.btnLight}
                    </button>
                </div>
                <div className="sauce-none-btn">
                    <button type="button" onClick={btnCheeseNoneClick} className="btn-sauce-none btn btn-outline-secondary">
                        {objPizzaBuilder.objCheese.btnNone}
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Cheese;