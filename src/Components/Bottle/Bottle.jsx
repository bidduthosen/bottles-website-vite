import './Bottle.css'
import PropTypes from 'prop-types';

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img } = bottle;
    return (
        <div className="bottle">
            <img style={{ height: '250px' }} src={img} alt="" />
            <h3>{name}</h3>
            <button onClick={() => handleAddToCart(bottle)}>visited</button>
        </div>
    );
};
Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}

export default Bottle;