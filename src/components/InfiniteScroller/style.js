import { styled } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MovieCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  gap: 20px;
`;

export const Heading = styled.h1``;

export const MovieCard = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: auto;
`;

export const Title = styled.div`
  width: 20px;
  height: 40px;
  border-radius: 5px;
`;

export const UserId = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  font-size: 14px;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;
