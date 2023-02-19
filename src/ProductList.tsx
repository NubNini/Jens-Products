import React from "react"

 export type ProductType = {
    productName: string
    productImage: string
    isSale: boolean
    price: string
    index: number
    type: string
}

export type ProductListType = ProductType[];

const ProductCard = (props: {product: ProductType}) => {
    return(
      <div className="productCard">
          <div className="saleTag">{props.product.isSale && "sale"}</div>
          <img
              alt={`${props.product.productName}`}
              src={`/images/${props.product.productImage}`}
          />
          <div className="productDetails">
              <p> {props.product.productName}</p>
              <p>{props.product.price}</p>
          </div>
      </div>
    )
  }
  
  const ProductList = (props: {productData: ProductListType}) => {
 return (
          <div className="productContainer">
              {props.productData.map((product: ProductType) => {
                  return <ProductCard product={product} />
              })}
          </div>
      )
  }

  export default ProductList;