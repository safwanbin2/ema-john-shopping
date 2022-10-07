import { getCart } from "../utilities/lcdb";

const ProductsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getCart();
    const oldCart = [];
    for (const id in savedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            oldCart.push(addedProducts);
        }
    }
    return { products, oldCart };
}

export { ProductsAndCartLoader }