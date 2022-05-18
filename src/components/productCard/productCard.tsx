import { useDispatch, useSelector } from "react-redux";
import { FC } from "react";

import { selectCartItems } from "../../store/cart/cart-selector";
import { addItemToCart } from "../../store/cart/cart-action";

import { BUTTON_TYPES_CLASSES } from "../button/buttonComponent";
import {
  Name,
  Price,
  ProductCardContainer,
  Footer,
  AddButton,
} from "./productCardStyles";

import { CategoryItem } from "../../store/categories/categories.type";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <AddButton
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </AddButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
