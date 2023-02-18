import React from "react"
import data from "./productData.json"

type ProductType = {
    productName: string
    productImage: string
    isSale: boolean
    price: string
    index: number
    type: string
}

const ProductCard = ({ product }: {product: ProductType}) => {
    return(
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
  }
  
  const ProductList = () => {
      return (
          <div className="productContainer">
              {data.map((product: ProductType) => {
                  return <ProductCard product={product} />
              })}
          </div>
      )
  }


  export default ProductList