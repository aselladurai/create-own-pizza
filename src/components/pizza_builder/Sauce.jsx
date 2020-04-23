import React, { Fragment, useState, useEffect } from 'react';
import '../../style/style.css';
import sauce_cm_piz from '../../assets/images/pizza_type/icon_sauce_Marinara.webp';
import sauce_cgp_piz from '../../assets/images/pizza_type/icon_sauce_CreamyGarlicParm.webp';
import objPizzaBuilder from '../../assets/labels/labels';
import { Modal } from 'react-bootstrap';
import { CM, CGP, BBQ, EXTRA, REGULAR, LIGHT, NONE, DEFAULT_AMT } from '../../constants/sauce';

const Sauce = (props) => {
    const [modalInfo, setModalInfo] = useState({
        show: false,
        title: '',
        desc: ''
    });
    const [sauceType, setSauceType] = useState(CM);
    const [sauceInfo, setSauceInfo] = useState({
        amount: DEFAULT_AMT,
        desc: '',
    });

    useEffect(() => {
        setSauceDesc();
        props.updateParent({sauceType, ...sauceInfo});
    }, [sauceType])

    const setSauceDesc = () => {
        let desc = sauceType === CM ? objPizzaBuilder.objSauce.cmRegularDesc : (sauceType === CGP ? objPizzaBuilder.objSauce.cgpRegularDesc : '')
        setSauceInfo({
            ...sauceInfo,
            amount: REGULAR,
            desc
        });
    }
    const cmClick = () => {
        setSauceType(CM);
    }

    const cgpClick = () => {
        setSauceType(CGP);
    }

    const btnSauceExtraClick = () => {
        let desc = sauceType === CM ? objPizzaBuilder.objSauce.cmExtraDesc : (sauceType === CGP ? objPizzaBuilder.objSauce.cgpExtraDesc : '')
        setSauceInfo({
            ...sauceInfo,
            amount: EXTRA,
            desc,
        });
        props.btnSauceExtraClick();
    }

    const btnSauceRegularClick = () => {
        let desc = sauceType === CM ? objPizzaBuilder.objSauce.cmRegularDesc : (sauceType === CGP ? objPizzaBuilder.objSauce.cgpRegularDesc : '')
        setSauceInfo({
            ...sauceInfo,
            amount: REGULAR,
            desc
        });
        props.btnSauceRegularClick();
    }

    const btnSauceLightClick = () => {
        let desc = sauceType === CM ? objPizzaBuilder.objSauce.cmLightDesc : (sauceType === CGP ? objPizzaBuilder.objSauce.cgpLightDesc : '')
        setSauceInfo({
            ...sauceInfo,
            amount: LIGHT,
            desc
        });
        props.btnSauceLightClick();
    }

    const btnSauceNoneClick = () => {
        let desc = objPizzaBuilder.objSauce.sauceNoneDesc;
        //setSauceType('');
        setSauceInfo({
            ...sauceInfo,
            amount: NONE,
            desc
        });
        props.btnSauceNoneClick();
    }

    const showModal = (flag) => {
        if(flag === 'cm') {
            setModalInfo({
                show: true,
                title: objPizzaBuilder.objModal.cmName,
                desc: objPizzaBuilder.objModal.cmDesc
            })
        }
        else if(flag === 'cgp') {
            setModalInfo({
                show: true,
                title: objPizzaBuilder.objModal.cgpName,
                desc: objPizzaBuilder.objModal.cgpDesc
            })
        }
        else if(flag === 'bbq') {
            setModalInfo({
                show: true,
                title: objPizzaBuilder.objModal.thinCrispyName,
                desc: objPizzaBuilder.objModal.thinNCrispyDesc
            })
        }
    }

    return (
        <Fragment>
            <div className="sause-header pizza-type">
                <span>Sauce</span>{sauceInfo.desc}
            </div>
            <div className="pizza-type-container">
                <div className="cm-pizza-container">
                    <div className="img-wrapper">
                        <img src={sauce_cm_piz} alt="Classic Marinara" onClick={cmClick} />
                    </div>
                    {
                        (sauceInfo.amount !== NONE) ? (sauceType === CM ? <i className="fas fa-check-circle"></i> : '') : ''
                    }
                    <div className="cm-pizza-desc">
                        <span>{objPizzaBuilder.objSauce.cmName}</span>
                        <span className="cm-pizza-info" onClick={() => showModal('cm')}>
                            <i className="fas fa-info-circle"></i>
                        </span>
                    </div>
                    
                </div>
                <div className="cgp-pizza-container">
                    <div className="img-wrapper">
                        <img src={sauce_cgp_piz} alt="Creamy Garlic Paramesan" onClick={cgpClick} />
                    </div>
                    {
                        (sauceInfo.amount !== NONE) ? (sauceType === CGP ? <i className="fas fa-check-circle"></i> : '') : ''
                    }
                    <div className="cgp-pizza-desc">
                        <span>{objPizzaBuilder.objSauce.cgpName}</span>
                        <span className="cm-pizza-info" onClick={() => showModal('cgp')}>
                            <i className="fas fa-info-circle"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="sauce-amount-container">
                <div className="sauce-amount-text">Amount: <span>{sauceInfo.amount}</span></div>
                <div className="sauce-extra-btn-container">
                    <button type="button" onClick={btnSauceExtraClick} className="btn-sauce-extra btn btn-outline-secondary">
                        {objPizzaBuilder.objSauce.btnExtra}
                    </button>
                </div>
                <div className="sauce-medium-btn">
                    <button type="button" onClick={btnSauceRegularClick} className="btn-sauce-medium btn btn-outline-secondary">
                        {objPizzaBuilder.objSauce.btnRegular}
                    </button>
                </div>
                <div className="sauce-light-btn">
                    <button type="button" onClick={btnSauceLightClick} className="btn-sauce-medium btn btn-outline-secondary">
                        {objPizzaBuilder.objSauce.btnLight}
                    </button>
                </div>
                <div className="sauce-none-btn">
                    <button type="button" onClick={btnSauceNoneClick} className="btn-sauce-none btn btn-outline-secondary">
                        {objPizzaBuilder.objSauce.btnNone}
                    </button>
                </div>
            </div>
            <Modal show={modalInfo.show}
            onHide={() => setModalInfo({...modalInfo, show: false})}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {modalInfo.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {modalInfo.desc} 
                    </p>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Sauce;