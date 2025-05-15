import React, { createContext, useReducer} from "react";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || {},
  favorites: JSON.parse(localStorage.getItem("favorites")) || {},
  theme: localStorage.getItem("theme") || "light",
};

export const GlobalContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;
      const qty = state.cart[id] ? state.cart[id] + 1 : 1;
      const newCart = { ...state.cart, [id]: qty };
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      const newCart = { ...state.cart };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    }
    case "TOGGLE_FAVORITE": {
      const { id } = action.payload;
      const newFav = { ...state.favorites };
      if (newFav[id]) {
        delete newFav[id];
      } else {
        newFav[id] = true;
      }
      localStorage.setItem("favorites", JSON.stringify(newFav));
      return { ...state, favorites: newFav };
    }
    case "TOGGLE_THEME": {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    }
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id) => dispatch({ type: "ADD_TO_CART", payload: { id } });
  const removeFromCart = (id) => dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  const toggleFavorite = (id) => dispatch({ type: "TOGGLE_FAVORITE", payload: { id } });
  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        favorites: state.favorites,
        theme: state.theme,
        addToCart,
        removeFromCart,
        toggleFavorite,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
