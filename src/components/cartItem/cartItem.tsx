import { ItemDetails, CartItemContainer, Name } from "./cartItemStyles";
import { FC } from "react";
import { CartItem as TCartItem } from "../../store/cart/cart-type";

type CartItermComponentProps = {
  cartItem: TCartItem;
};

const CartItemComponent: FC<CartItermComponentProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItemComponent;
