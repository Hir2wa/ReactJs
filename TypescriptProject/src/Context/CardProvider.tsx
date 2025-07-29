export type CartItemType = {
  sky: string;
  name: string;
  price: number;
  qty: number;
};
type CartStateType = { cart: CartItemType[] };
const initCartState: CartStateType = { cart: [] };

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;
export type ReducerAction = {
  action: string;
  payload?: CartItemType;
};
