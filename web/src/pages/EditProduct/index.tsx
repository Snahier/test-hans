import React from "react"
import { EditProductStyledContainer, EditorWrapper } from "./styles"
import { DropzoneArea } from "material-ui-dropzone"
import { convertMbToBytes } from "../../utils/convertMbToBytes"
import { TextField } from "@material-ui/core"
import MUIRichTextEditor from "mui-rte"

interface EditProductProps {}

const EditProduct: React.FC<EditProductProps> = () => {
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

        <TextField label="Reference" variant="outlined" multiline rows={4} />

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

      <aside></aside>
    </EditProductStyledContainer>
  )
}
export default EditProduct
