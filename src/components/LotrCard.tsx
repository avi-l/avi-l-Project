import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Movie, Character, Quote, LotrCardProps } from "../config/types";
import { useSelector } from "react-redux";
import { RootState } from "../dux/rootReducer";
import { DisplayCharacterDetails } from "./DisplayCharacterDetails";
import { DisplayMovieDetails } from "./DisplayMovieDetails";
import { DisplayQuoteDetails } from "./DisplayQuoteDetails";

const LotrCard: React.FC<LotrCardProps> = (props) => {
  const dataType = useSelector((state: RootState) => state.dataType.dataType);

  return (
    <Card bg="dark" className="text-yellow-500">
      <Card.Img src="default_lotr.jpg" className="object-cover rounded" />
      <Card.Body>
        <ListGroup>
          {dataType === "movie" && (
            <DisplayMovieDetails movie={props as Movie} />
          )}
          {dataType === "character" && (
            <DisplayCharacterDetails character={props as Character} />
          )}
          {dataType === "quote" && (
            <DisplayQuoteDetails quote={props as Quote} />
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default LotrCard;
