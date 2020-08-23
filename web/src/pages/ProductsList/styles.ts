import styled from "styled-components"
import { Add } from "@styled-icons/material"
import { Button, FormControl } from "@material-ui/core"

export const ProductsListStyledContainer = styled.section`
  height: 100%;

  display: grid;
  grid:
    "header" max-content
    "content" max-content
    / 0.5fr;
  @media (max-width: 1024px) {
    grid:
      "header" max-content
      "content" max-content
      / 0.9fr;
  }

  justify-content: center;
  align-content: center;
  gap: 1.5rem;

  main {
    display: grid;
    grid-auto-rows: max-content;
    gap: 1.5rem;
  }
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

export const ProductsPerPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProductsPerPageSelect = styled(FormControl)`
  width: 200px;
`
