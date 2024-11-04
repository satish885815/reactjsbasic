import React from "react";
import { CardContainer, Heading, MovieCardContainer } from "./style";
import Card from "./Card";

function CardComponent({ data }) {
  return (
    <CardContainer>
      <Heading>List Of Card</Heading>
      <MovieCardContainer>
        {data.map((ele, index) => {
          return (
            <div key={ele.id + index}>
              <Card data={ele} />
            </div>
          );
        })}
      </MovieCardContainer>
    </CardContainer>
  );
}

export default CardComponent;
