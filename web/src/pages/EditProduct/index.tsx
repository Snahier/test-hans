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

interface EditProductProps {}

interface Categories {
  id: number
  name: string
  selected: boolean
}

const EditProduct: React.FC<EditProductProps> = () => {
  const [categories, setCategories] = useState<Categories[]>([])

  // Fetch all categories from the database
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await api.get("categories")

        const categories = data.map((category: Categories) => ({
          ...category,
          selected: true,
        }))

        setCategories(categories)
      } catch (error) {
        alert("Error while fetching data")
      }
    })()
  }, [])

  function handleUncheckBox(id: number) {
    const updatedCheckboxCategories = categories.map((category: Categories) =>
      category.id === id
        ? { ...category, selected: !category.selected }
        : { ...category }
    )
    setCategories(updatedCheckboxCategories)
  }

  return (
    <EditProductStyledContainer>
      <h1>Example name 1</h1>

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
        <TextField label="Reference" variant="outlined" size="small" />
        <TextField label="Quantity" variant="outlined" size="small" />

        <PriceWrapper>
          <TextField label="Price (HT)" variant="outlined" size="small" />
          <TextField label="Price (TTC)" variant="outlined" size="small" />
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
                    checked={category.selected}
                    onClick={() => handleUncheckBox(category.id)}
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
