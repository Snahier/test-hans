import React, { useEffect, useState } from "react"
import {
  EditProductStyledContainer,
  EditorWrapper,
  PriceWrapper,
  ListWraper,
  ActiveWrapper,
} from "./styles"
import { DropzoneArea } from "material-ui-dropzone"
import { convertMbToBytes } from "../../utils/convertMbToBytes"
import {
  TextField,
  Paper,
  ListItem,
  ListItemText,
  List,
  ListSubheader,
  Checkbox,
  Button,
} from "@material-ui/core"
import MUIRichTextEditor from "mui-rte"
import { api } from "../../config/api"
import { useHistory } from "react-router-dom"

interface EditProductProps {}

interface Product {
  id: number
  image: string
  reference: string
  name: string
  priceHt: number
  priceTtc: number
  quantity: number
  active: boolean
  categories: [Category]
}

interface Category {
  id: number
  name: string
  selected?: boolean
}

const EditProduct: React.FC<EditProductProps> = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const history = useHistory()
  const [product, setProduct] = useState<Product>(
    history.location.state as Product
  )

  // Fetch all categories from the database
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await api.get("categories")

        setCategories(data)
        handleCheckIfCategoryIsActive()
      } catch (error) {
        alert("Error while fetching data")
      }
    })()
  }, [])

  // function handleUncheckBox(id: number) {
  //   const updatedCheckboxCategories = categories.map((category: Category) =>
  //     category.id === id
  //       ? { ...category, selected: !category.selected }
  //       : { ...category }
  //   )
  //   setCategories(updatedCheckboxCategories)
  // }

  function handleCheckIfCategoryIsActive() {
    const newArr = categories.map((category: Category) => {
      console.log(category)
      for (const active of product.categories) {
        console.log(active)
        return category.id === active.id
          ? { ...category, selected: true }
          : { ...category, selected: false }
      }
    })

    setCategories(newArr)
  }

  return (
    <EditProductStyledContainer>
      <h1>{product.name}</h1>

      <main>
        <DropzoneArea
          acceptedFiles={["image/*"]}
          filesLimit={3}
          maxFileSize={convertMbToBytes(2.5)}
          dropzoneText="Click or drag and drop one or more images in this area"
          showAlerts={["error", "info"]}
        />

        <TextField label="Resume" variant="outlined" multiline rows={4} />

        <EditorWrapper>
          <MUIRichTextEditor
            label="Click here to write a description"
            controls={[
              "title",
              "bold",
              "italic",
              "underline",
              "numberList",
              "bulletList",
              "undo",
              "redo",
            ]}
          />
        </EditorWrapper>
      </main>

      <aside>
        <TextField
          label="Reference"
          value={product.reference}
          variant="outlined"
          size="small"
        />
        <TextField
          label="Quantity"
          value={product.quantity}
          variant="outlined"
          size="small"
        />

        <PriceWrapper>
          <TextField
            label="Price (HT)"
            value={product.priceHt}
            variant="outlined"
            size="small"
          />
          <TextField
            label="Price (TTC)"
            value={product.priceTtc}
            variant="outlined"
            size="small"
          />
        </PriceWrapper>

        <Paper>
          <List
            component="nav"
            aria-label="main mailbox folders"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Categories
              </ListSubheader>
            }
          >
            <ListWraper>
              {categories.map((category) => (
                <ListItem key={category.id}>
                  <Checkbox
                    size="small"
                    color="primary"
                    // checked={category.selected}
                    // onClick={() => handleUncheckBox(category.id)}
                  />
                  <ListItemText primary={category.name} />
                </ListItem>
              ))}
            </ListWraper>
          </List>
        </Paper>

        <ActiveWrapper>
          <label>Active?</label>
          <Button variant="contained" color="primary">
            Yes
          </Button>
          <Button variant="contained" color="default">
            No
          </Button>
        </ActiveWrapper>

        <Button variant="contained" color="primary">
          Save
        </Button>
      </aside>
    </EditProductStyledContainer>
  )
}
export default EditProduct
