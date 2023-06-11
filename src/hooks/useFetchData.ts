import { toast } from "react-toastify";
import { fetchLotrItems } from "../api/api";
import { ITEMS_PER_PAGE } from "../config/constants";
import {
  IS_LOADING_DATA,
  CLEAR_DATA,
  SET_DATA,
  ADD_DATA,
} from "../dux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../dux/rootReducer";

export const useFetchData = () => {
  const dispatch = useDispatch();
  const { data, limit, offset, total } =
    useSelector((state: RootState) => state.data) || [];
  const dataType =
    useSelector((state: RootState) => state.dataType.dataType) || {};
  const isLoading = useSelector((state: RootState) => state.isLoading) || false;

  const fetchData = async (page: number, offset: number) => {
    try {
      dispatch({ type: IS_LOADING_DATA, payload: true });
      const res = await fetchLotrItems(dataType, ITEMS_PER_PAGE, page, offset);
      if (offset === 0) {
        dispatch({ type: SET_DATA, payload: res });
      } else {
        dispatch({ type: ADD_DATA, payload: res });
      }
    } catch (error) {
      toast.error(
        "Error Fetching Data: Probably too many requests to the LOTR API"
      );
      console.error(error);
    } finally {
      dispatch({ type: IS_LOADING_DATA, payload: false });
    }
  };

  const handleFetchMore = () => {
    const nextPage = Math.floor(offset / limit) + 2;
    fetchData(nextPage, nextPage * limit);
  };

  const handleClearData = () => dispatch({ type: CLEAR_DATA });

  useEffect(() => {
    fetchData(1, 0);
  }, [dataType]);

  return {
    data,
    isLoading,
    fetchData,
    limit,
    offset,
    total,
    handleFetchMore,
    handleClearData,
  };
};
