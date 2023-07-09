class ProductManager {
    constructor() {
        this.products = [];

    }

    addProduct(
        title,
        descripcion,
        price,
        thumbnail,
        code,
        stock,
        id
    ) {

        if (title || descripcion || price || thumbnail || code || stock ) {
            if (!(this.products.some((product) => product.id === id))) {

                const product = {

                    title,
                    descripcion,
                    price,
                    thumbnail,
                    code: code + 1,
                    stock,
                    id: this.products.length +1
                }
                this.products.push(product);
                return product;


            }
        } else {
            console.log("campos incompletos");
        };
    }

    getProducts() {
        return this.products;
    }
    getProductsById(id) {
        const product = this.products.find((product) => product.id === id);
        const respuesta = !product ? console.log('campo erroneo') : product;
        return respuesta;

    }






}
// cargar productos
const productManager = new ProductManager();
productManager.addProduct('Taza', 'Taza 250 cl', 25, '', 1, 100);
productManager.addProduct('Plato', 'Plato Blanco 30cm', 300, '', 2, 100);
productManager.addProduct('Cuchara', 'Cuchara de cafe', 150, '', 3, 100);
productManager.addProduct('Vaso', 'Vaso 250 cl', 200, '', 4, 100);
productManager.addProduct('Copa', 'Copa vino 100 cl', 280, '', 5, 100);
productManager.addProduct('Servilleta', 'Servilleta de papel', 100, '', 6, 100);
// productManager.addProduct();







// productManager.addProduct();
// todos los productos
console.log(productManager.getProducts());


// producto por id
console.log(productManager.getProductsById(2));

   
