import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import ProductsList from "./ProductsList"
import EditProduct from "./EditProduct"

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ProductsList} />
      <Route path="/products/:id" component={EditProduct} />
    </BrowserRouter>
  )
}

export default Routes
