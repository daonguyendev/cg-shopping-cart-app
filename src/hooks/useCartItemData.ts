import { useState, useEffect } from "react";
import { CartItemData } from "../types/CartItemTypes";
import axios from "axios";

export const useGetCartItemDatas = () => {
  const [data, setData] = useState<CartItemData[]>([]);

  const getData = async () => {
    const { data } = await axios.get("./data/items.json");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
