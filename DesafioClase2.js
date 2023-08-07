class ProductManager {
    products
    static id = 0

    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: ProductManager.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (title && description && price && thumbnail && code && stock) {
            if (!this.products.find((product) => product.code === code)) {
                this.products.push(product)
                ProductManager.id++
            }
            else {
                console.log(`el codigo ${code} ya existe`)
            }
        }
        else {
            console.log(`Todos los campos del productos deben incluirse`)
        }

    }
    getProducts() {
        console.log(this.products)
    }

    getProductById(code) {
        const producto = this.products.find((product) => (product.code === code))
        if (producto)
            console.log(producto)
        else
            console.log(`Product Not found`)
    }
}

const misProductos = new ProductManager
misProductos.addProduct("Producto1", "este es el primer producto", 1500, "producto1.jpg", 1234, 500)
misProductos.addProduct("Producto2", "este es el segundo producto", 300, "producto2.jpg", 1334, 100)

/* Tests solicitados */

console.log("\nTest 1 - agrego un producto con información insuficiente:")
misProductos.addProduct("Producto3")

console.log("\nTest 2 - Agrego un producto con un código existente:")
misProductos.addProduct("Producto4", "este es el cuarto producto", 5000, "producto4.jpg", 1334, 2000)

console.log("\nTest 3 -Consulto por los productos que agregue con getProducts:")
misProductos.getProducts()

console.log("\nTest 4 - Consulto por un producto existente:")
misProductos.getProductById(1234)

console.log("\nTest 5 - Consulto por un producto inexistente:")
misProductos.getProductById(223)