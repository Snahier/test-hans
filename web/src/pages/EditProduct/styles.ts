import styled from "styled-components"

export const EditProductStyledContainer = styled.section`
  height: 100%;

  display: grid;
  grid:
    "header header" max-content
    "content aside" 0.7fr
    / 0.4fr 0.15fr;
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

    display: grid;
    grid-auto-rows: max-content;
    gap: 1.5rem;
  }
`

export const EditorWrapper = styled.div`
  max-width: 700px;
`

export const PriceWrapper = styled.div`
  display: flex;
  & > :first-child {
    margin-right: 1.5rem;
  }
`

export const ListWraper = styled.div`
  max-height: 12.5rem;
  overflow-y: scroll;
`

export const ActiveWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    width: 45%;
  }

  label {
    flex: 100%;
    margin-bottom: 0.5rem;
  }
`
