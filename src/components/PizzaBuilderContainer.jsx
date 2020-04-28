import React, {useState} from 'react';
import PizzaBuilder from './PizzaBuilder';
import PizzaImage from './PizzaImage';
import '../style/style.css';

const PizzaBuilderContainer = () => {

    const [pizzaBuilderInfo, setPizzaBuilderInfo] = useState({})
    const [toppingList, setToppingList] = useState({})
    const [toppingInfo, setToppingInfo] = useState({})

    const updateParent = (param) => {
        setPizzaBuilderInfo(param);
    }

    const updateToppingInfo = (toppingList) => {
        setToppingList({
            ...toppingList
        });
    }

    return (
        <div>
            <div className="pizza-builder-container">
                <div className="image-container">
                    <PizzaImage pbInfo={pizzaBuilderInfo} toppings={toppingList} />
                </div>
                <div className="builder-container">
                    <PizzaBuilder updateParent={updateParent} updatePBContainer={updateToppingInfo} />
                </div>
            </div>
        </div>
    )
}

export default PizzaBuilderContainer;