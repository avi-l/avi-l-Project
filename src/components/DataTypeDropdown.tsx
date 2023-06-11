import { useDispatch, useSelector } from "react-redux";

import { Dropdown } from "react-bootstrap";

import { QueryOptions } from "../config/constants";
import { IQueryTypes } from "../config/types";
import { RootState } from "../dux/rootReducer";
import { SET_DATA_TYPE } from "../dux/reducers";

export const DataTypeDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const dataType = useSelector((state: RootState) => state.dataType.dataType);

  const handleQueryTypeChange = (queryType: IQueryTypes) => {
    dispatch({ type: SET_DATA_TYPE, payload: queryType });
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-warning">
        {dataType.charAt(0).toUpperCase() + dataType.substring(1) + "s"}
        <Dropdown.Menu variant="dark">
          {QueryOptions.map((option: IQueryTypes) => (
            <Dropdown.Item
              key={option}
              onClick={() => handleQueryTypeChange(option)}
            >
              {option.charAt(0).toUpperCase() + option.substring(1) + "s"}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown.Toggle>
    </Dropdown>
  );
};
