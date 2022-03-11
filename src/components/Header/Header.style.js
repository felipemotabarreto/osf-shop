import styled from "styled-components";

export const Header = styled.header({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
  borderBottom: "2px solid gray",
});

export const Title = styled.h1({
  margin: 0,
});

export const Search = styled.input({
  borderRadius: "8px",
  border: "1px solid gray",
});
