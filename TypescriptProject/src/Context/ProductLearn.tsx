//gona try my best to create a product context for now for sure

import { createContext, useEffect, type ReactElement } from "react";

//how to create a context

type ProductType = {
  sku: string;
  name: string;
  price: number;
};
type ProductStateType = { product: ProductType[] };
type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

const initProduct: ProductStateType = { product: [] };

const ProductProvider = ({ children }: ChildrenType): ReactElement => {
    const 
  useEffect( () => {
    const fetchData = async () =>{
        const data = await fetch("https://localhost:5500/products").then(
            (res) => res.json
          );
          return data;
    }
   
  }, []);
};

export const ProductContext = createContext(initProduct);
