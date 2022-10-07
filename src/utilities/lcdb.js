// setting cart to db
const addToDb = id => {
    let shoppingCart = {};
    const existingCart = localStorage.getItem('shopping-cart');
    if(existingCart){
        shoppingCart = JSON.parse(existingCart);
    }
    
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
// getting cart from db
const getCart = () => {
    let shoppingCart = {};
    const existingCart = localStorage.getItem('shopping-cart');
    if(existingCart){
        shoppingCart = JSON.parse(existingCart);
    }
    return shoppingCart;
}
// remove item from db by id
const removeItem = id => {
    const cart = JSON.parse(localStorage.getItem('shopping-cart'));
    if(id in cart){
        delete cart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(cart))
    }
}

export{
    addToDb,
    getCart,
    removeItem
};