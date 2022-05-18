import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 15px;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    column-gap: unset;
    align-items: center;
  }
`;

export const TitleLink = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 15px;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
