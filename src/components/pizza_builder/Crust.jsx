import React, { Fragment, useState, useEffect } from 'react';
import '../../style/style.css';
import pan_piz from '../../assets/images/pizza_type/icon_crust_pan.webp';
import ht_piz from '../../assets/images/pizza_type/icon_crust_ht.webp';
import thin_piz from '../../assets/images/pizza_type/icon_crust_thin.webp';
import objPizzaBuilder from '../../assets/labels/labels';
import { Modal } from 'react-bootstrap';
import { Med, Lg, Per } from '../../constants/size';
import { priceObj } from '../../constants/price';

const Crust = (props) => {
    
    const [modalInfo, setModalInfo] = useState({
        show: false,
        title: '',
        desc: ''
    });
    const [size, setSize] = useState(Med);
    const [panCrust_extra_pricre, setPanCrustExtraPrice] = useState('');

    useEffect(() => {
        setPanCrustExtraPrice(`($ ${priceObj.pan_med_extra_price.toFixed(2)} more)`)
    }, [])

    const btnLargeClick = () => {
        setSize(Lg);
        setPanCrustExtraPrice(`($${priceObj.pan_lg_extra_price.toFixed(2)} more)`)
        props.btnLargeClick();
    }
    
    const btnMediumClick = () => {
        setSize(Med);
        setPanCrustExtraPrice(`($${priceObj.pan_med_extra_price.toFixed(2)} more)`)
        props.btnMediumClick();
    }

    const btnPersonalClick = () => {
        setSize(Per);
        setPanCrustExtraPrice(``)
        props.btnPersonalClick();
    }

    const showModal = (flag) => {
        if(flag === 'pan'){
            setModalInfo({
                show: true,
                title: objPizzaBuilder.objModal.orgPan,
                desc: objPizzaBuilder.objModal.origPanDesc
            })
        }
        else if(flag === 'ht'){
            setModalInfo({
                show: true,
                title: objPizzaBuilder.objModal.htName,
                desc: objPizzaBuilder.objModal.handTossedDesc
            })
        }
        else if(flag === 'thin'){
            setModalInfo({
                show: true,
                title: objPizzaBuilder.objModal.thinCrispyName,
                desc: objPizzaBuilder.objModal.thinNCrispyDesc
            })
        }
    }

return (
        <Fragment>
            <div className="crust-header pizza-type">
                <span>Crust</span> 
                {props.Desc}
            </div>
            <div className="pizza-type-container">
                <div className="pan-pizza-container">
                    <div className="img-wrapper">
                        <img src={pan_piz} onClick={props.panPizzaClick} alt="Pan pizza"/>
                    </div>
                    {   
                        props.IsPanPizza ? 
                            <i className="fas fa-check-circle"></i> 
                        : ''
                    }
                    <div className="pan-pizza-desc">
                        <span>{objPizzaBuilder.objCrust.origPanName}</span>
                        <span className="pan-pizza-info" onClick={() => showModal('pan')}>
                            <i className="fas fa-info-circle"></i>
                        </span>
                        <div>{panCrust_extra_pricre}</div>
                    </div>
                    
                </div>
                <div className="ht-pizza-container">
                    <div className="img-wrapper">
                        <img src={ht_piz} onClick={props.htPizzaClick} alt="Hand tossed pizza"/>
                    </div>
                    {
                        props.IsHandTossed ? <i className="fas fa-check-circle"></i> : ''
                    }
                    <div className="ht-pizza-desc">
                        <span>{objPizzaBuilder.objCrust.htName}</span>
                        <span className="ht-pizza-info" onClick={() => showModal('ht')}>
                            <i className="fas fa-info-circle"></i>
                        </span>
                    </div>
                </div>
                <div className="thin-pizza-container">
                    <div className="img-wrapper">
                        <img src={thin_piz} onClick={props.thinCrispyClick} alt="Thin n Crispy"/>
                    </div>
                    {
                        props.IsThinCrispy ? <i className="fas fa-check-circle"></i> : ''
                    }
                    <div className="thin-pizza-desc">
                        <span>{objPizzaBuilder.objCrust.thinCrispyName}</span>
                        <span className="thin-pizza-info" onClick={() => showModal('thin')}>
                            <i className="fas fa-info-circle"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="pizza-size-container">
                <div className="crust-size-text">Size: <span>{props.Size}</span></div>
                {   
                    (props.IsHandTossed || props.IsThinCrispy) ? 
                        <Fragment>
                            <div className="pizza-large-btn large">
                                <button type="button" onClick={btnLargeClick} className={`btn-pizza-large btn btn-outline-secondary ${(size === Lg) ? 'btn-selected' : ''}`}>
                                    {objPizzaBuilder.objCrust.btnLarge}
                                </button>
                            </div>
                            <div className="pizza-medium-btn large">
                                <button type="button" onClick={btnMediumClick} className={`btn-pizza-medium btn btn-outline-secondary ${(size === Med) ? 'btn-selected' : ''}`}>
                                    {objPizzaBuilder.objCrust.btnMedium}
                                </button>
                            </div> 
                        </Fragment> : ''
                }
                {
                    props.IsPanPizza ? 
                        <Fragment>
                            <div className="pizza-large-btn medium">
                                <button type="button" onClick={btnLargeClick} className={`btn-pizza-large btn btn-outline-secondary ${(size === Lg) ? 'btn-selected': '' } `}>
                                    {objPizzaBuilder.objCrust.btnLarge}
                                </button>
                            </div>
                            <div className="pizza-medium-btn medium">
                                <button type="button" onClick={btnMediumClick} className= {`btn-pizza-medium btn btn-outline-secondary  ${(size === Med) ? 'btn-selected' : ''} `}>
                                    {objPizzaBuilder.objCrust.btnMedium}
                                </button>
                            </div> 
                            <div className="pizza-personal-btn medium">
                                <button type="button" onClick={btnPersonalClick} className={`btn-pizza-personal btn btn-outline-secondary ${(size === Per) ? 'btn-selected' : ''}`}>
                                    {objPizzaBuilder.objCrust.btnPersonal}
                                </button>
                            </div> 
                        </Fragment> : ''
                }

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

export default Crust;