import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    // const { name, img, id } = bottle;
    return (
        <div className="bottle">
            <img style={{ height: '250px' }} src={bottle.img} alt="" />
            <h3>{bottle.name}</h3>
            <button onClick={() => handleAddToCart(bottle.id)}>visited</button>
        </div>
    );
};

Bottle.prototype={
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}
export default Bottle;