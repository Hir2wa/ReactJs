//gona try my best to create a product context for now for sure

import { createContext, useEffect, useState, type ReactElement } from "react";

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
export const ProductContext = createContext(initProduct);

const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async (): Promise<ProductType[]> => {
      const data = await fetch("https://localhost:5500/products")
        .then((res) => res.json)
        .catch((err) => {
          if (err instanceof Error) throw new Error("value not provided ");
        });
      return data;
    };
    fetchData().then((products) => setProducts(products));
  }, []);

  return (
    <ProductContext.Provider value={{ product: products }}>
      {children}
    </ProductContext.Provider>
  );
};
