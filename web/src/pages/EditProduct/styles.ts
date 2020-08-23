import styled from "styled-components"

export const EditProductStyledContainer = styled.section`
  height: 100%;

  display: grid;
  grid:
    "header header" max-content
    "content aside" 0.7fr
    / 0.4fr 0.1fr;
  justify-content: center;
  align-content: center;
  gap: 1.5rem;

  h1 {
    grid-area: header;
  }

  main {
    grid-area: content;

    display: grid;
    grid-auto-rows: max-content;
    gap: 1.5rem;

    border: 1px solid #000;
    padding: 1.5rem;
  }

  aside {
    grid-area: aside;
  }
`

export const EditorWrapper = styled.div`
  max-width: 700px;
`
