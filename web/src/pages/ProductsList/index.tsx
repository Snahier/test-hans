import React, { useEffect, useState } from "react"
import {
  ProductsListStyledContainer,
  Header,
  AddProductIcon,
  SearchWrapper,
  AddProductButton,
  ProductsPerPageWrapper,
  ProductsPerPageSelect,
  EditIcon,
  DeleteIcon,
} from "./styles"
import {
  TextField,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Menu,
  IconButton,
} from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import { api } from "../../config/api"
import { useHistory } from "react-router-dom"

interface ProductsListProps {}

interface Product {
  id: number
  image: string
  reference: string
  name: string
  priceHt: number
  priceTtc: number
  quantity: number
  active: boolean
  categories: [Categories]
}

interface Categories {
  id: number
  name: string
}

const ProductsList: React.FC<ProductsListProps> = () => {
  const [products, setProducts] = useState<Product[]>([])

  const history = useHistory()

  useEffect(() => {
    ;(async () => {
      try {
        const { data: products } = await api.get("products")
        console.log(products)
        setProducts(products)
      } catch (error) {
        alert("Error while fetching products")
      }
    })()
    api.get("products")
  }, [])

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

      <main>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Réf.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price HT</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Active</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell>{product.image}</TableCell>
                  <TableCell>{product.reference}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.categories[0].name}</TableCell>
                  <TableCell>{product.priceHt}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>{product.active ? "yes" : "no"}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        history.push(`/products/${product.id}`, product)
                      }
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <ProductsPerPageWrapper>
          <ProductsPerPageSelect variant="outlined">
            <InputLabel id="items-per-page-select">
              Products per page
            </InputLabel>
            <Select
              labelId="items-per-page-select"
              id="demo-simple-select-outlined"
              value={10}
              label="Products per page"
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </ProductsPerPageSelect>

          <Pagination count={10} color="primary" />
        </ProductsPerPageWrapper>
      </main>
    </ProductsListStyledContainer>
  )
}
export default ProductsList
