import React, {useState} from 'react';
import PizzaBuilder from './PizzaBuilder';
import PizzaImage from './PizzaImage';
import '../style/style.css';

const PizzaBuilderContainer = () => {

    const [pizzaBuilderInfo, setPizzaBuilderInfo] = useState({})

    const updateParent = (param) => {
        //console.log(param);
        setPizzaBuilderInfo(param);
    }
    return (
        <div>
            <div className="pizza-builder-container">
                <div className="image-container">
                    <PizzaImage pbInfo={pizzaBuilderInfo} />
                </div>
                <div className="builder-container">
                    <PizzaBuilder updateParent={updateParent}/>
                </div>
            </div>
        </div>
    )
}

export default PizzaBuilderContainer;