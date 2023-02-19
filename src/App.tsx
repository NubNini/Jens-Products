import React from "react"
import "./App.css"
import ProductList from "./ProductList"
import data from "./productData.json"
import FilterProducts from "./FilterProducts"

function App() {
    const [selectedTypes, setSelectedTypes] = React.useState<string[]>([])

    return (
        <div className="App">
            <header className="App-header">
              <FilterProducts productData={data} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes}/>
                <ProductList productData={data}/>
            </header>
        </div>
    )
}

export default App;