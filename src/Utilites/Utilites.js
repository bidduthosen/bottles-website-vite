const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString);
    }
    return []
};

const saveCartToLs = (cart) => {
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
}

const addToLs = (id) => {
    const cart = getStoredCart();
    cart.push(id)

    // save to local storege
    saveCartToLs(cart)

}

export { addToLs, getStoredCart }