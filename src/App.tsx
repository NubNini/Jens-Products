import React from "react"
import data from "./productData.json"
import "./App.css"

type Product = {
    productName: string
    productImage: string
    isSale: boolean
    price: string
    index: number
    type: string
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {data.map((product: Product) => {
                    return (
                        <div className="productCard">
                           <div className="saleTag">{product.isSale && "sale"}</div>
                            <img
                                alt={`${product.productName}`}
                                src={`/images/${product.productImage}`}
                            />
                            <div className="productDetails">
                            <p> {product.productName}</p>
                            <p>{product.price}</p>
                            </div>
                        </div>
                    )
                })}
            </header>
        </div>
    )
}

export default App
