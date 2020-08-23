import React from "react"
import { EditProductStyledContainer } from "./styles"
import { DropzoneArea } from "material-ui-dropzone"
import { convertMbToBytes } from "../../utils/convertMbToBytes"

interface EditProductProps {}

const EditProduct: React.FC<EditProductProps> = () => {
  return (
    <EditProductStyledContainer>
      <h1>Example name 1</h1>
      <DropzoneArea
        acceptedFiles={["image/*"]}
        filesLimit={3}
        maxFileSize={convertMbToBytes(2.5)}
        dropzoneText="Click or drag and drop one or more images in this area"
        showAlerts={["error", "info"]}
      />
    </EditProductStyledContainer>
  )
}
export default EditProduct
