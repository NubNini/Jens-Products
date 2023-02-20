import React from "react"
import "./App.css"
import ProductList from "./ProductList"
import data from "./productData.json"
import FilterProducts from "./FilterProducts"

function App() {
    const [selectedTypes, setSelectedTypes] = React.useState<string[]>([])

    const filteredData =
        selectedTypes.length === 0
            ? data
            : data.filter((product) => selectedTypes.includes(product.type))

    return (
        <div className="App">
            <div className="banner">
                <header className="siteName">
                    <h1>Jen's Pantry</h1>
                </header>
                <div className="filterBanner">
                    <FilterProducts
                        productData={data}
                        selectedTypes={selectedTypes}
                        setSelectedTypes={setSelectedTypes}
                    />
                </div>
            </div>
            <div className="productListContainer">
                <ProductList productData={filteredData} />
            </div>
        </div>
    )
}

export default App
