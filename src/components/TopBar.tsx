import React from "react";
import LotrLogo from "/lotr-logo.png";
import { Navbar, Nav, Container, Button, ButtonGroup } from "react-bootstrap";
import { DataTypeDropdown } from "./DataTypeDropdown";
import { useFetchData } from "../hooks/useFetchData";
import { useSelector } from "react-redux";
import { RootState } from "../dux/rootReducer";

const TopBar: React.FC = () => {
  const { isLoading, handleFetchMore, handleClearData, data } = useFetchData();
  const dataType = useSelector((state: RootState) => state.dataType.dataType);

  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img width="180" src={LotrLogo} alt="Lotr logo" />
          </Navbar.Brand>
          <Nav className=" mr-20">
            <ButtonGroup>
              {data?.length > 0 && (
                <Button variant="outline-warning" onClick={handleClearData}>
                  Delete All
                </Button>
              )}

              <Button variant="outline-warning" onClick={handleFetchMore}>
                {isLoading ? "Fetching " : " "}
                {data?.length > 0 && "More "}
                {dataType?.charAt(0).toUpperCase() +
                  dataType?.substring(1) +
                  "s"}
              </Button>
            </ButtonGroup>
          </Nav>
          <Nav className="mr-8">
            <DataTypeDropdown />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
