import React from "react";
import { MovieCard, Title, UserId } from "./style";

function Card({ data }) {
  const { id, body, title } = data;

  return (
    <MovieCard>
      <UserId>{id}</UserId>
      <div>{body}</div>
      <Title>{title}</Title>
    </MovieCard>
  );
}

export default Card;
