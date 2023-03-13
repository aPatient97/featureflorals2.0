// require('dotenv').config()
const productsArray = [
    {
        id: process.env.REACT_APP_TULIP_KEY,
        title: 'Bouquet of tulips',
        price: 32.00
    },
    {
        id: process.env.REACT_APP_MIXED_KEY,
        title: 'Mixed seasonal bouquet',
        price: 38.00
    }
]

const getProductData = (id) => {
    let productData = productsArray.find(product => product.id === id)

    if (productData === undefined) {
        console.log('Product data does noe exist for ID: ' + id)
    }

    return productData
}

export { productsArray, getProductData }
