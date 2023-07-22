import { useState, useEffect } from "react";
import { CartItemData } from "../types/CartItemTypes";
import axios from "axios";

export const useGetCartItemDatas = () => {
  const [data, setData] = useState<CartItemData[]>([]);

  const getData = async () => {
    // const { data } = await axios.get("./data/items.json"); //use for mock data
    const { data } = await axios.get("http://localhost:8080/products/get-all"); //use for api call
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
