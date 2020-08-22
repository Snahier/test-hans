import React from "react"
import {
  ProductsListStyledContainer,
  Header,
  AddProductIcon,
  SearchWrapper,
  AddProductButton,
  ProductsPerPageWrapper,
  ProductsPerPageSelect,
} from "./styles"
import {
  Button,
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
  FormControl,
} from "@material-ui/core"
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
              {[1, 2, 3, 4, 5].map((row) => (
                <TableRow key={row}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell>image src</TableCell>
                  <TableCell>T001</TableCell>
                  <TableCell>Example name 1</TableCell>
                  <TableCell>T-shirt</TableCell>
                  <TableCell>Price HT</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell>(...)</TableCell>
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
