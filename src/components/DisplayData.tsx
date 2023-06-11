import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Character, Movie, Quote } from "../config/types";
import "../index.css";
import LotrCard from "./LotrCard";
import { useFetchData } from "../hooks/useFetchData";

const DisplayData: React.FC = () => {
  const { isLoading, data } = useFetchData();

  return (
    <div className="scrollable-container">
      {isLoading ? (
        <div className="flex justify-center h-full flex-col items-center">
          <Spinner variant="warning" />
        </div>
      ) : (
        <>
          <Container>
            <Row>
              {data?.map((data: Movie | Character | Quote) => (
                <Col lg={4} md={6} sm={12} key={data._id} className="p-1">
                  <LotrCard {...data} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default DisplayData;
