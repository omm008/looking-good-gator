import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = { items: [], total: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      let items;
      if (exists) {
        items = state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        items = [...state.items, action.payload];
      }
      const total = items.reduce((s, it) => s + it.price * it.quantity, 0);
      return { ...state, items, total };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter((i) => i.id !== action.payload);
      const total = items.reduce((s, it) => s + it.price * it.quantity, 0);
      return { ...state, items, total };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
