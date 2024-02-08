"use client";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { add, reduce } from "../count/countSlice";

const useCount = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count);

  const addCount = (): void => {
    dispatch(add());
  };
  const reduceCount = (): void => {
    dispatch(reduce());
  };

  return {
    count,
    addCount,
    reduceCount
  };
};

export default useCount;
