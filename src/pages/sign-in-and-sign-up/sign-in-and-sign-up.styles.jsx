import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  /* width: 850px; */
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export const SignInStyle = styled.div`
  margin: 0 auto 30px;
  display: flex;
`;

export const SignUpStyle = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
