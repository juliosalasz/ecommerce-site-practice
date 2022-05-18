import { FC } from "react";

import {
  CollectionPreviewContainer,
  TitleLink,
  PreviewContainer,
} from "./categoryPreviewStyles";
import { CategoryItem } from "../../store/categories/categories.type";

import ProductCard from "../productCard/productCard";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CollectionPreviewContainer>
      <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      <PreviewContainer>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CategoryPreview;
