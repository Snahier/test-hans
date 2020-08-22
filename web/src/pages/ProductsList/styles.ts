import styled from "styled-components"
import { Add } from "@styled-icons/material"
import { Button } from "@material-ui/core"

export const ProductsListStyledContainer = styled.section`
  height: 100%;

  display: grid;
  grid:
    "header" max-content
    "content" 0.7fr
    /0.5fr;
  justify-content: center;
  align-content: center;
  gap: 1.5rem;
`

export const Header = styled.header`
  grid-area: header;

  display: grid;
  grid-auto-rows: max-content;
  gap: 1.5rem;

  h1 {
    margin: 0;
  }
`

export const AddProductButton = styled(Button)`
  width: max-content;
`
export const AddProductIcon = styled(Add)`
  color: inherit;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
