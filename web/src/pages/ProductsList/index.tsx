import React from "react"
import {
  ProductsListStyledContainer,
  Header,
  AddProductIcon,
  SearchWrapper,
  AddProductButton,
} from "./styles"
import { Button, TextField } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"

interface ProductsListProps {}

const ProductsList: React.FC<ProductsListProps> = () => {
  return (
    <ProductsListStyledContainer>
      <Header>
        <h1>Product list</h1>

        <AddProductButton variant="contained" color="primary">
          <AddProductIcon /> Add a product
        </AddProductButton>

        <SearchWrapper>
          <TextField label="Search" variant="outlined" size="small" />
          <Pagination count={10} color="primary" />
        </SearchWrapper>
      </Header>
    </ProductsListStyledContainer>
  )
}
export default ProductsList
