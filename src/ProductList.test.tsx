import React from "react"
import { render, screen } from "@testing-library/react"
import { ProductCard } from "./ProductList"

test("Renders a product not on sale correctly", () => {
    render(
        <ProductCard
            product={{
                index: 0,
                isSale: false,
                price: "$49.99",
                productImage: "Product_1.jpeg",
                productName: "Pure Blonde Crate",
                type: "Beer",
            }}
        />
    )
    expect(screen.queryByText(/sale/i)).not.toBeInTheDocument()
    expect(screen.getByText(/Pure Blonde Crate/i)).toBeInTheDocument()
})

test("Renders a product on sale correctly", () => {
    render(
        <ProductCard
            product={{
                index: 1,
                isSale: true,
                price: "$14.99",
                productImage: "Product_2.jpeg",
                productName: "Victoria Bitter 4x6x375ml",

                type: "Beer",
            }}
        />
    )
    expect(screen.getByText(/sale/i)).toBeInTheDocument()
    expect(screen.getByText(/Victoria Bitter 4x6x375ml/i)).toBeInTheDocument()
})
