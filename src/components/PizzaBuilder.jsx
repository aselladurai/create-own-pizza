import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import '../style/style.css';
import Crust from './pizza_builder/Crust';
import Sauce from './pizza_builder/Sauce';
import Cheese from './pizza_builder/Cheese';
import { connect } from 'react-redux';
import { getTotalPrice } from '../actions/priceAction';
import { Med, Lg, Per } from '../constants/size';
import objPizzaBuilder from '../assets/labels/labels';
import { priceObj } from '../constants/price';
import { CM, CGP, BBQ, EXTRA, REGULAR, LIGHT, NONE, DEFAULT_AMT } from '../constants/sauce';
import ToppingList from './pizza_builder/ToppingList';

const PizzaBuilder = (props) => {
    const defaultCrustSize = Med;
    /*
    const [crust, setCrust] = useState({
        desc: objPizzaBuilder.objCrust.handTossed,
        isPanPizza: false,
        isHandTossed: true,
        isThinCrispy: false,
        totalPrice: priceObj.base_price
    });//
    const [size, setSize] = useState(defaultCrustSize);//
    const [isExtraCheese, setExtraCheese] = useState(false);//
    const [extraCheesePrice, setExtraCheesePrice] = //
    useState(priceObj.extra_cheese_med_price); //
    const [cheeseAmount, setCheeseAmount] = useState('Regular'); //
    const [sauceInfo, setSauceInfo] = useState({
        sauceType: '',
        amount: '',
        desc: ''
    });
    */

    const [pizzaBuilder, setPizzaBuilder] = useState({
        crust: {
            size: defaultCrustSize,
            desc: objPizzaBuilder.objCrust.handTossed,
            isPanPizza: false,
            isHandTossed: true,
            isThinCrispy: false,
        },
        sauce: {
            sauceType: '', //cm, cgp, bbq
            amount: REGULAR,
            desc: objPizzaBuilder.objSauce.cmRegularDesc,
            isExtra: false,
            isRegular: true,
            isLight: false,
            isNone: false,
        },
        cheese: {
            isExtraCheese: false,
            extraCheesePrice: priceObj.extra_cheese_med_price,
            cheeseAmount: REGULAR
        },
        totalPrice: priceObj.base_price
    })

    useEffect(() => {
        calculateTotalPrice();
        /*
        let pbObj = {
            ...crust,
            size,
            cheeseAmount,
            sauceInfo
        }*/
        /*
        [crust.desc, crust.isPanPizza, crust.isHandTossed, 
        crust.isThinCrispy, crust.totalPrice, size, isExtraCheese,
        extraCheesePrice, cheeseAmount, sauceInfo]
        */
            //pizzaBuilder.crust, pizzaBuilder.sauce, pizzaBuilder.cheese, pizzaBuilder.cheese.extraCheesePrice,
        
            /*
            [pizzaBuilder.crust.size, pizzaBuilder.crust.desc, pizzaBuilder.crust.isPanPizza, pizzaBuilder.crust.isHandTossed, pizzaBuilder.crust.isThinCrispy,
            pizzaBuilder.sauce.sauceType, pizzaBuilder.sauce.amount, pizzaBuilder.sauce.desc, pizzaBuilder.sauce.isExtra, pizzaBuilder.sauce.isRegular, pizzaBuilder.sauce.isLight, pizzaBuilder.sauce.isNone,
            pizzaBuilder.cheese.isExtraCheese, pizzaBuilder.cheese.extraCheesePrice, pizzaBuilder.cheese.cheeseAmount,
            pizzaBuilder.totalPrice]
            */
        props.updateParent(pizzaBuilder);
    }, [pizzaBuilder.crust, pizzaBuilder.sauce, 
        pizzaBuilder.cheese, pizzaBuilder.totalPrice])

    const updateSauceType = (sauceInfo) => {
        //setSauceInfo(sauceInfo);
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust
            },
            sauce: {
                ...pizzaBuilder.sauce,
                sauceType: sauceInfo.sauceType,
                amount: sauceInfo.amount,
                desc: sauceInfo.desc
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: pizzaBuilder.totalPrice
        })
    }

    const calculateTotalPrice = () => {
        //props.getTotalPrice({...crust, size, isExtraCheese})
        props.getTotalPrice(pizzaBuilder)
    }

    const htPizzaClick = () => {
        /*
        if(size === Per)
            setSize(Lg);
        setCrust({
            desc: objPizzaBuilder.objCrust.handTossed,
            isPanPizza: false,
            isHandTossed: true,
            isThinCrispy: false,
            totalPrice: props.getTotalPrice({...crust, size, isExtraCheese})
        });
        */
        setPizzaBuilder({
            crust: {
                size: Lg, //pizzaBuilder.crust.size === Per ? Lg : pizzaBuilder.crust.size,
                desc: objPizzaBuilder.objCrust.handTossed,
                isPanPizza: false,
                isHandTossed: true,
                isThinCrispy: false,
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: props.getTotalPrice(pizzaBuilder)
        })
    }

    const panPizzaClick = () => {
        /*
        setCrust({
            desc: objPizzaBuilder.objCrust.originalPan,
            isPanPizza: true,
            isHandTossed: false,
            isThinCrispy: false,
            totalPrice: props.getTotalPrice({...crust, size, isExtraCheese})
        });
        */
        setPizzaBuilder({
            crust: {
                size: pizzaBuilder.crust.size,
                desc: objPizzaBuilder.objCrust.originalPan,
                isPanPizza: true,
                isHandTossed: false,
                isThinCrispy: false,
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: props.getTotalPrice(pizzaBuilder)
        })
    }

    const thinCrispyClick = () => {
        /*
        setCrust({
            desc: objPizzaBuilder.objCrust.thinNCrispyDesc,
            isPanPizza: false,
            isHandTossed: false,
            isThinCrispy: true,
            totalPrice: props.getTotalPrice({...crust, size, isExtraCheese})
        })
        */
        setPizzaBuilder({
            crust: {
                size: pizzaBuilder.crust.size,
                desc: objPizzaBuilder.objCrust.thinNCrispyDesc,
                isPanPizza: false,
                isHandTossed: false,
                isThinCrispy: true,
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: props.getTotalPrice(pizzaBuilder)
        })
    }

    const btnCrustLargeClick = () => {
        /*
        setSize(Lg);
        setCrust({
            ...crust,
            totalPrice: props.getTotalPrice({...crust, size, isExtraCheese})
        });
        setExtraCheesePrice(priceObj.extra_cheese_lg_price);
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
                size: Lg,
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese, 
                extraCheesePrice: priceObj.extra_cheese_lg_price,
            },
            totalPrice: props.getTotalPrice(pizzaBuilder)
        })
    }

    const btnCrustMediumClick = () => {
        /*
        setSize(Med);
        setCrust({
            ...crust,
            totalPrice: props.getTotalPrice({...crust, size, isExtraCheese})
        });
        setExtraCheesePrice(priceObj.extra_cheese_med_price);
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
                size: Med,
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese, 
                extraCheesePrice: priceObj.extra_cheese_med_price,
            },
            totalPrice: props.getTotalPrice(pizzaBuilder)
        })
    }

    const btnCrustPersonalClick = () => {
        /*
        setSize(Per);
        setCrust({
            ...crust,
            getTotalPrice: props.getTotalPrice({...crust, size, isExtraCheese})
        });
        setExtraCheesePrice(priceObj.extra_cheese_per_price);
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
                size: Per,
            },
            sauce: {
                ...pizzaBuilder.sauce,
            },
            cheese: {
                ...pizzaBuilder.cheese, 
                extraCheesePrice: priceObj.extra_cheese_per_price,
            },
            totalPrice: props.getTotalPrice(pizzaBuilder)
        })
    }

    //const sauceHandlerObj = {
        //wrapping sauce related functions in this obj
    //}

    const btnSauceExtraClick = () => {
        /*console.log('Sauce Extra click...');
        setSauceInfo({
            ...sauceInfo,
            amount: 'Extra'
        })
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
            },
            sauce: {
                ...pizzaBuilder.sauce,
                amount: EXTRA
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: pizzaBuilder.totalPrice
        })
    }

    const btnSauceRegularClick = () => {
        //console.log('Sauce Regular click...');
        /*
        setSauceInfo({
            ...sauceInfo,
            amount: 'Regular'
        })
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
            },
            sauce: {
                ...pizzaBuilder.sauce,
                amount: REGULAR
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: pizzaBuilder.totalPrice
        })
    }

    const btnSauceLightClick = () => {
        /*
        setSauceInfo({
            ...sauceInfo,
            amount: 'Light'
        })
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
            },
            sauce: {
                ...pizzaBuilder.sauce,
                amount: LIGHT
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: pizzaBuilder.totalPrice
        })
    }

    const btnSauceNoneClick = () => {
        /*
        setSauceInfo({
            ...sauceInfo,
            amount: 'None'
        })
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
            },
            sauce: {
                ...pizzaBuilder.sauce,
                amount: NONE
            },
            cheese: {
                ...pizzaBuilder.cheese
            },
            totalPrice: pizzaBuilder.totalPrice
        })
    }

    const btnCheeseExtraClick = (cheeseAmt) => {
        /*
        setExtraCheese(true);
        setCheeseAmount(cheeseAmt);
        getTotalPrice({...crust, size, isExtraCheese});
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese,
                isExtraCheese: true,
                cheeseAmount: EXTRA
            },
            totalPrice: pizzaBuilder.totalPrice
        });
        getTotalPrice(objPizzaBuilder);
    }

    const btnCheeseRegularClick = (cheeseAmt) => {
        /*
        setExtraCheese(false);
        setCheeseAmount(cheeseAmt);
        getTotalPrice({...crust, size, isExtraCheese});
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust,
            },
            sauce: {
                ...pizzaBuilder.sauce,
            },
            cheese: {
                ...pizzaBuilder.cheese,
                isExtraCheese: false,
                cheeseAmount: REGULAR
            },
            totalPrice: pizzaBuilder.totalPrice
        });
        getTotalPrice(objPizzaBuilder);
    }

    const btnCheeseLightClick = (cheeseAmt) => {
        /*
        setExtraCheese(false);
        setCheeseAmount(cheeseAmt);
        getTotalPrice({...crust, size, isExtraCheese});
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese,
                isExtraCheese: false,
                cheeseAmount: LIGHT
            },
            totalPrice: pizzaBuilder.totalPrice
        });
        getTotalPrice(objPizzaBuilder);
    }

    const btnCheeseNoneClick = (cheeseAmt) => {
        /*
        setExtraCheese(false);
        setCheeseAmount(cheeseAmt);
        getTotalPrice({...crust, size, isExtraCheese});
        */
        setPizzaBuilder({
            crust: {
                ...pizzaBuilder.crust
            },
            sauce: {
                ...pizzaBuilder.sauce
            },
            cheese: {
                ...pizzaBuilder.cheese,
                isExtraCheese: false,
                cheeseAmount: NONE
            },
            totalPrice: pizzaBuilder.totalPrice
        });
        getTotalPrice(objPizzaBuilder);
    }

    const updatePizzaBuilderContainer = (toppingList) => {
        props.updatePBContainer(toppingList);
    }
    
    return (
        <div>
            <div className="total-price">${props.totalPrice.toFixed(2)}</div>
            <div className="pizza-builder">
                <Tabs className="pizza-builder-tabs">
                    <Tab eventKey="crust" title="Crust, Sause and Cheese">
                        <Crust 
                        panPizzaClick={panPizzaClick}
                        htPizzaClick={htPizzaClick}
                        thinCrispyClick={thinCrispyClick}
                        btnLargeClick={btnCrustLargeClick}
                        btnMediumClick={btnCrustMediumClick}
                        btnPersonalClick={btnCrustPersonalClick}
                        Desc={props.desc}
                        IsPanPizza={props.isPanPizza}
                        IsHandTossed={props.isHandTossed}
                        IsThinCrispy={props.isThinCrispy}
                        TotalPrice={props.totalPrice}
                        Size={props.size} />
                        <Sauce 
                        btnSauceExtraClick={btnSauceExtraClick}
                        btnSauceRegularClick={btnSauceRegularClick}
                        btnSauceLightClick={btnSauceLightClick}
                        btnSauceNoneClick={btnSauceNoneClick}
                        updateParent={updateSauceType}
                        />
                        <Cheese 
                        btnCheeseExtraClick={btnCheeseExtraClick} 
                        btnCheeseRegularClick={btnCheeseRegularClick} 
                        btnCheeseLightClick={btnCheeseLightClick} 
                        btnCheeseNoneClick={btnCheeseNoneClick} 
                        extraCheesePrice={pizzaBuilder.cheese.extraCheesePrice.toFixed(2)} />
                    </Tab>
                    <Tab eventKey="toppings" title="Toppings">
                        <ToppingList updatePB={updatePizzaBuilderContainer} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        desc: state.crust.desc,
        isPanPizza: state.crust.isPanPizza,
        isHandTossed: state.crust.isHandTossed,
        isThinCrispy: state.crust.isThinCrispy,
        totalPrice: state.totalPrice,
        size: state.crust.size
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTotalPrice: (pizzaBuilder) => {
            dispatch(getTotalPrice(pizzaBuilder));
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PizzaBuilder);