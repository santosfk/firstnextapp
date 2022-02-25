import styled from "styled-components";

export const Container = styled.div`
  padding: 0 2rem;
  width: 100vw;
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #e50914;
`;
export const List = styled.div`
  margin-top: 5px;
`;
export const MoviesList = styled.ul`
  transition: 0.5s;
  display: flex;
  img:hover {
    transition: 0.5s ease-in-out;
    border-radius: 50px;
  }
  li {
    list-style: none;
    font-size: 2rem;
    margin: 10px;
  }
`;
export const Buttons = styled.div`
  display: flex;
`;
export const ButtonNext = styled.button``;
export const ButtonPrev = styled.button``;
