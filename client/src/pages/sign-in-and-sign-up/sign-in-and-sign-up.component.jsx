import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import {
  SignInAndSignUpContainer,
  SignInStyle,
  SignUpStyle,
} from "./sign-in-and-sign-up.styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignInStyle>
      <SignIn />
    </SignInStyle>
    <SignUpStyle>
      <SignUp />
    </SignUpStyle>
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
