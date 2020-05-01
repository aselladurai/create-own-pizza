import React, { Fragment, useState, useEffect } from 'react';
import '../../style/style.css';
import cheese_moz from '../../assets/images/pizza_type/icon_cheese_Mozzarella.webp';
import objPizzaBuilder from '../../assets/labels/labels';
import { defaultToppingAmount } from '../../constants/size';
import btnLeftDisabled from '../../assets/images/toppings/btn-topping-left-inactive.png';
import btnLeftEnabled from '../../assets/images/toppings/btn-topping-left-active.png'
import btnRightDisabled from '../../assets/images/toppings/btn-topping-right-inactive.png'
import btnRightEnabled from '../../assets/images/toppings/btn-topping-right-active.png'
import btnWholeDisabled from '../../assets/images/toppings/btn-topping-whole-inactive.png'
import btnWholeEnabled from '../../assets/images/toppings/btn-topping-whole-active.png'

const Topping = (props) => { 

    const [toppingInfo, setToppingInfo] = useState({
        Id: props.Id,
        Image: props.imageUrl,
        Name: props.toppingName,
        Desc: props.toppingDesc,
        IsSelected: props.isSelected,
        Amount: defaultToppingAmount, //Extra/Regular/None
        LRW: props.toppingLRW // L/R/W
    })

    useEffect(() => {
        props.updateParent(toppingInfo);

    }, [toppingInfo.IsSelected, toppingInfo.Amount, toppingInfo.LRW])

    const isSelected = toppingInfo.IsSelected;
    const toppingItemClassName = isSelected ? 'toppingItem-selected' : 'toppingItem-unselected'
    const toppingImageClassName = isSelected ? 'toppingImage-selected' : 'toppingImage-unselected'

    

    const extraClickHandler = (e) => {
        setToppingInfo({
            ...toppingInfo,
            Amount: 'Extra'
        })
    }

    const regularClickHandler = () => {
        setToppingInfo({
            ...toppingInfo,
            Amount: 'Regular'
        })
    }

    const noneClickHandler = () => {
        setToppingInfo({
            ...toppingInfo,
            Amount: 'None'
        })
    }

    const toppingItemClickHandler = (e) => {
        let className = e.target.className;
        let extra = className.indexOf('btn-topping-extra');
        let regular = className.indexOf('btn-topping-regular');
        //let none = className.indexOf('btn-topping-none');
        let lrw = className.indexOf('lrw');
        let btnControls = className.indexOf('toppingBtnControls');
        let imgControls = className.indexOf('toppingImgControls');

        let isItemClick = (extra === -1 && regular === -1 && lrw === -1 && btnControls === -1 && imgControls === -1);
        /*let leftHalf = className.indexOf('btn-topping-none');
        let rightHalf = className.indexOf('btn-topping-none');
        let whole = className.indexOf('btn-topping-none');*/

        if(isItemClick){ //not clicked on buttons & img controls
            setToppingInfo({
                ...toppingInfo,
                IsSelected: !toppingInfo.IsSelected
            })
        }
    }

    const leftHalfClickHandler = () => {
        setToppingInfo({
            ...toppingInfo,
            LRW: 'L'
        })
    }

    const rightHalfClickHandler = () => {
        setToppingInfo({
            ...toppingInfo,
            LRW: 'R'
        })
    }

    const wholeClickHandler = () => {
        setToppingInfo({
            ...toppingInfo,
            LRW: 'W'
        })
    }

    return (
        
        <div className={toppingItemClassName} onClick={toppingItemClickHandler}>
            <div className="toppingImageContainer">
                <img className={toppingImageClassName} src={toppingInfo.Image} alt="Mushroom"/>
                { isSelected ? <i className="fas fa-check-circle"></i> : ''}
            </div>
            <div className="toppingInfo">
                <div className="toppingName">{toppingInfo.Name}</div>
                { isSelected ?  <div className="toppingDesc">{toppingInfo.Desc}</div> : '' }
            </div>
            { isSelected ? 
                <Fragment>
                    <div className="toppingBtnControls">
                        <button className={`btn-topping-extra btn btn-outline-secondary ${(toppingInfo.Amount === 'Extra') ? 'selected' : ''}`} onClick={extraClickHandler}>Extra</button>
                        <button className={`btn-topping-regular btn btn-outline-secondary ${(toppingInfo.Amount === 'Regular') ? 'selected' : ''}`} onClick={regularClickHandler}>Regular</button>
                        <button className={`btn-topping-none btn btn-outline-secondary ${(toppingInfo.Amount === 'None') ? 'selected' : ''}`} onClick={noneClickHandler}>None</button>
                    </div>
                    <div className="toppingImgControls">
                        {toppingInfo.LRW === 'L' ? <img src={btnLeftEnabled} onClick={leftHalfClickHandler} className="l-enabled lrw" alt="Left enabled"/> : <img src={btnLeftDisabled} onClick={leftHalfClickHandler} className="l-disabled lrw" alt="Left disabled"/>}
                        {toppingInfo.LRW === 'R' ? <img src={btnRightEnabled} onClick={rightHalfClickHandler} className="r-enabled lrw" alt="Right enabled"/> : <img src={btnRightDisabled} onClick={rightHalfClickHandler} className="r-disabled lrw" alt="Right disabled"/>}
                        {toppingInfo.LRW === 'W' ? <img src={btnWholeEnabled} onClick={wholeClickHandler} className="w-enabled lrw" alt="Whole enabled"/> : <img src={btnWholeDisabled} onClick={wholeClickHandler} className="w-disabled lrw" alt="Whole disabled"/>}
                    </div>
                </Fragment>
            : '' }
        </div>
    )
}

export default Topping;