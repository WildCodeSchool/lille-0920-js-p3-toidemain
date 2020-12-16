import styled from "styled-components";

export const AboutContainer = styled.div``;

export const Portraits = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 3vw;
  //flex-direction: row;
  //flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Member = styled.div`
  margin: 0 3vw;

  img {
    min-width: 10vw;
    max-width: 40vw;

    @media screen and (max-width: 1024px) {
      width: 50vw;
    }
  }
`;
