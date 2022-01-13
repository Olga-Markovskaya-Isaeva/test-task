import styled from "styled-components";

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
`

export const CaptionStyles = styled.div`
  font-family: 'Rock Salt', cursive;
  padding: 20px;
  font-size: 50px;
  font-weight: bolder;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  letter-spacing: 10px;
  text-shadow: 1px 1px 1px black;
`

export const TableStyles = styled.table`
  background-color: #ff33cc;
  table-layout: fixed;
  width: 40vw;
  border-collapse: collapse;
  border: 3px solid purple;
`
export const TheadStyles = styled.thead`
  color: white;
  text-shadow: 1px 1px 1px black;
  
`

export const TrTheadStyles = styled.tr`
  font-family: 'Rock Salt', cursive;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  border: 3px solid purple;
`

export const ThStyles = styled.th`
  letter-spacing: 2px;
  padding: 20px;
  font-family: 'Rock Salt', cursive;
`

export const TdStyles = styled.td`
  letter-spacing: 1px;
  padding: 20px;
  font-family: 'Rock Salt', cursive;
  overflow: hidden;
`
