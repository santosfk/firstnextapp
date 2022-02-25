import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  width: 100vw;
`;

export const List = styled.div`
  margin-top: 5px;
`;
export const MoviesList = styled.ul`
  transition: 0.5s;
  display: flex;
  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: #0000ff;
  }
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

export const Header = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #0000ff;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;

  a {
    margin: 0px 30px;
    transition: 0.5s;
    font-weight: bold;
  }
  a:hover {
    color: black;
    transform: translateY(3px);
  }
`;
