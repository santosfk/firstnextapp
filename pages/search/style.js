import styled from "styled-components";

export const Container = styled.div`
  li {
    display: inline-block;
  }
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
