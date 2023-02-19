import React from "react"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import { ProductListType, ProductType } from "./ProductList"

const FilterProducts = (props: { productData: ProductListType,  selectedTypes: string[], setSelectedTypes: any }) => {

    const handleChange = (event: SelectChangeEvent<typeof props.selectedTypes>) => {
        const {
            target: { value },
        } = event
        props.setSelectedTypes(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        )
    }

    const productTypesArray = props.productData.map((product: ProductType) => {
        return product.type
    })

    const deduplicatedTypes = [...new Set(productTypesArray)]


    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="multiple-checkbox-label">
                    Filter
                </InputLabel>
                <Select
                    labelId="multiple-checkbox-label"
                    id="multiple-checkbox"
                    multiple
                    value={props.selectedTypes}
                    onChange={handleChange}
                    input={<OutlinedInput label="Filter" />}
                    renderValue={(selected) => selected.join(", ")}
                >
                    {deduplicatedTypes.map((type: string) => {
                        return (
                            <MenuItem key={type} value={type}>
                                <Checkbox
                                    checked={props.selectedTypes.indexOf(type) > -1}
                                />
                                <ListItemText primary={type} />
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export default FilterProducts
