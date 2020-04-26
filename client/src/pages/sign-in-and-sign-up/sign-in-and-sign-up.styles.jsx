import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

export const SignInStyle = styled.div`
  @media screen and (max-width: 800px) {
    margin: 0 auto 30px;
    display: flex;
  }
`;

export const SignUpStyle = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
