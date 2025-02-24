import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './BottlesContainer.css'

const BottlesContainer = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    const handleAddToCart = (id) =>{
        console.log('clicked card' , id)
    }
    return (
        <div className='bottles'>
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
            }
        </div>
    );
};

export default BottlesContainer;