
import PropTypes from 'prop-types';

const Cart = ({bottle}) => {
    return (
        <div>
            <img style={{width: '80px'}} src={bottle.img} alt="" />
        </div>
    );
};

Cart.propTypes={
    bottle : PropTypes.array.isRequired
}

export default Cart;