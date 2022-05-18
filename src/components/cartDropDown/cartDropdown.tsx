import {
  CartDropdownContainer,
  EmptyMessage,
  CartItemsList,
} from "./cartDropdownStyles";

import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart-action";

import Button from "../button/buttonComponent";
import CartItemComponent from "../cartItem/cartItem";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart-selector";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
    dispatch(setIsCartOpen(!isCartOpen));
  }, [navigate, dispatch, isCartOpen]);
  return (
    <CartDropdownContainer>
      <CartItemsList>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItemComponent
              key={cartItem.id}
              cartItem={cartItem}
            ></CartItemComponent>
          ))
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItemsList>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
