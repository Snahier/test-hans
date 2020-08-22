import React from "react"
import { ProductsListStyledContainer } from "./styles"

interface ProductsListProps {}

const ProductsList: React.FC<ProductsListProps> = () => {
  return (
    <ProductsListStyledContainer>
      <h1>Product list</h1>
    </ProductsListStyledContainer>
  )
}
export default ProductsList
