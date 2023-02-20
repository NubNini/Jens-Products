import React from "react"
import "./ProductList.css"

export type ProductType = {
    productName: string
    productImage: string
    isSale: boolean
    price: string
    index: number
    type: string
}

export type ProductListType = ProductType[]

export const ProductCard = (props: { product: ProductType }) => {
    return (
        <div className="productCard">
            {props.product.isSale && (
                <div className="saleTag">
                   sale
                </div>
            )}
            <div className="product">
                <img
                    className="productImage"
                    alt={`${props.product.productName}`}
                    src={`/images/${props.product.productImage}`}
                />

                <div className="productDetails">
                    <p> {props.product.productName}</p>
                    <p>{props.product.price}</p>
                </div>
            </div>
        </div>
    )
}

const ProductList = (props: { productData: ProductListType }) => {
    return (
        <div className="productContainer">
            {props.productData.map((product: ProductType) => {
                return <ProductCard product={product} key={product.index} />
            })}
        </div>
    )
}

export default ProductList
