import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './BottlesContainer.css'
import { addToLs, getStoredCart } from '../../Utilites/Utilites';
import Cart from '../Cart/Cart';

const BottlesContainer = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log('loaded', bottles.length)
        if (bottles.length) {
            const storedCart = getStoredCart();
            let saveCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottl => bottl.id == id);
                if (bottle) {
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)

        }
    }, [bottles])

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle])
        addToLs(bottle.id)
    }
    return (
        <div >
            <div>
                <h3 style={{ textAlign: 'center' }}>Add to Cart: {cart.length}</h3>
                <div style={{ display: 'flex' , gap : "10px"}}>
                    {
                        cart.map(c => <Cart key={c.id} bottle={c}></Cart>)
                    }
                </div>
            </div>
            <div className='bottles'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }

            </div>
        </div>
    );
};

export default BottlesContainer;